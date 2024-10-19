import React, {useState} from "react"
import {FlatList, Image, Pressable, Text, View,} from "react-native"
import * as FilePicker from "expo-document-picker"
import {styles} from "../styles/styles"

export const calculateMedian = (arr: number[]) => {
    if (arr.length === 0) return 0
    const sortedArr = [...arr].sort((a, b) => a - b)
    const middleIndex = Math.floor(sortedArr.length / 2)
    return sortedArr.length % 2 === 0
        ? (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2
        : sortedArr[middleIndex]
}

export const calculateMean = (arr: number[]) => {
    if (arr.length === 0) return 0
    const sum = arr.reduce((acc, curr) => acc + curr, 0)
    return sum / arr.length
}

export const Upload = () => {
    const [fileUri, setFileUri] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [results, setResults] = useState<number[]>([])
    const [startTime, setStartTime] = useState<number | null>(null)

    const pickImage = async () => {
        const result = await FilePicker.getDocumentAsync({
            type: "image/*",
            copyToCacheDirectory: false,
        })
        if (!result.canceled && result.assets[0].uri) {
            setStartTime(performance.now())
            setFileUri(result.assets[0].uri)
            setError(null)
        } else {
            setError("Kein Bild ausgewählt.")
        }
    }

    const onImageLoad = () => {
        if (startTime) {
            const endTime = performance.now()
            const duration = endTime - startTime
            setResults((prevResults) => [duration, ...prevResults])
            setStartTime(null)
        }
    }

    const median = calculateMedian(results)
    const mean = calculateMean(results)

    return (
        <View style={styles.container}>
            <Text>Upload</Text>
            <Text>Median: {median.toFixed(5)} ms</Text>
            <Text>Mittelwert: {mean.toFixed(5)} ms</Text>
            <Text>Letzte Ergebnisse</Text>
            <FlatList
                data={results}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({item}) => (
                    <Text>{item.toFixed(5)} ms</Text>
                )}
            />
            <Pressable style={styles.button} onPress={pickImage}>
                <Text style={{color: "white"}}>Lade ein Bild hoch</Text>
            </Pressable>

            {fileUri && (
                <Image
                    source={{uri: fileUri}}
                    style={{width: 200, height: 200, marginTop: 20}}
                    onLoad={onImageLoad}
                />
            )}

            {error && (
                <Text style={{color: "red", marginTop: 20}}>{error}</Text>
            )}
        </View>
    )
}
