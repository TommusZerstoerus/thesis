import {FlatList, Pressable, SafeAreaView, Text, View} from "react-native"
import {styles} from "../styles/styles"
import {Profiler, useCallback, useMemo, useRef, useState} from "react"
import {calculateMean, calculateMedian} from "./Upload"
import {fakerDE as faker} from '@faker-js/faker'

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
        if (duration < 5000) {
            setResults(prevResults => [duration, ...prevResults])
        }
        resultTime.current = duration
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

interface ItemListProps  {
    onRenderDone: () => void,
    listSize: number
}

export const ItemList = (props : ItemListProps) => {
    const data = useMemo(() => Array.from({ length: props.listSize }, (_, i) => ` ${i + 1} ${faker.hacker.phrase()}`), [])

    const renderItem = useCallback(({ item }: { item: string }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
        </View>
    ), [])

    const onRender = useRef(false)

    const handleRenderDone = () => {
        if (!onRender.current) {
            onRender.current = true
            props.onRenderDone()
        }
    }

    return (
        <Profiler id="test" onRender={handleRenderDone}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={{width: '100%'}}
                initialNumToRender={props.listSize}
                windowSize={props.listSize}
            />
        </Profiler>
    )
}
