import {FlatList, Pressable, SafeAreaView, Text, View} from "react-native"
import {styles} from "../styles/styles"
import {useCallback, useRef, useState} from "react"
import {ItemList} from "../components/ItemList"
import {calculateMean, calculateMedian} from "./Upload"

const listSize = 1000

export const ShowList = () => {
    const [pressed, setPressed] = useState(false)
    const time = useRef<number>(0)
    const resultTime = useRef<number>(0)
    const [results, setResults] = useState<number[]>([])

    const togglePressed = () => {
        setPressed(!pressed)
        time.current = performance.now()
    }

    const handleFinishedRender = () => {
        const duration = performance.now() - time.current
        time.current = duration
        resultTime.current = duration
        if (duration < 5000) {
            setResults(prevResults => [duration, ...prevResults])
        }
    }

    const renderItem = useCallback(({item}: { item: number }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.toFixed(5)} ms</Text>
        </View>
    ), [])

    const median = calculateMedian(results)
    const mean = calculateMean(results)

    return (
        <SafeAreaView style={styles.container}>
            <Text>Dauer: {pressed ? resultTime.current.toFixed(5) : 0} ms</Text>
            <Text>Letzte Ergebnisse</Text>
            <Text>Median: {median} ms</Text>
            <Text>Mittelwert: {mean} ms</Text>
            <FlatList
                data={results}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
            <Pressable style={styles.button} onPress={togglePressed}>
                {pressed ? <Text>Verstecke die Liste</Text> : <Text>Zeige die Liste an</Text>}
            </Pressable>
            {pressed && (
                <ItemList onRenderDone={handleFinishedRender} listSize={listSize}/>
            )}
        </SafeAreaView>
    )
}