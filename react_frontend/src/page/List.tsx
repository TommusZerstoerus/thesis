import {FlatList, Pressable, SafeAreaView, Text, View} from "react-native"
import {styles} from "../styles/styles"
import React, {Profiler, useCallback, useMemo, useRef, useState} from "react"
import {fakerDE as faker} from '@faker-js/faker'
import {dataSize, listSize} from "../config";
import {calculateMean, calculateMedian} from "../helper";

export const List = () => {
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
        setResults(prevResults => [duration, ...prevResults])
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
            <Text>Median: {median} ms</Text>
            <Text>Mittelwert: {mean} ms</Text>
            <Text>Letzte Ergebnisse</Text>
            <FlatList
                data={results}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
            <Pressable style={styles.button} onPress={togglePressed}>
                {pressed ? <Text>Verstecke die Liste</Text> : <Text>Zeige die Liste an</Text>}
            </Pressable>
            {pressed && (
                <ItemList onRenderDone={handleFinishedRender}/>
            )}
        </SafeAreaView>
    )
}

interface ItemListProps {
    onRenderDone: () => void,
}

export const ItemList = (props: ItemListProps) => {
    const data = useMemo(() => Array.from({length: listSize}, (_, i) => ` ${i + 1} ${faker.lorem.words(10)}`), [])

    const renderItem = useCallback(({item}: { item: string }) => (
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
        <Profiler id="listRender" onRender={handleRenderDone}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={{width: '100%'}}
                initialNumToRender={listSize}
                windowSize={listSize}
            />
        </Profiler>
    )
}
