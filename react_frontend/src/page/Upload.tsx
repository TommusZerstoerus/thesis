import React, {useState} from "react";
import {
    Alert,
    FlatList,
    Image,
    Platform,
    Pressable,
    Text,
    View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FilePicker from "expo-document-picker";
import {styles} from "../styles/styles";

// Helper functions for median and mean
export const calculateMedian = (arr: number[]) => {
    if (arr.length === 0) return 0;
    const sortedArr = [...arr].sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedArr.length / 2);
    return sortedArr.length % 2 === 0
        ? (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2
        : sortedArr[middleIndex];
};

export const calculateMean = (arr: number[]) => {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
};

export const Upload = () => {
    const [fileUri, setFileUri] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [results, setResults] = useState<number[]>([]);
    const [startTime, setStartTime] = useState<number | null>(null);

    const pickImage = async () => {
        // Web: Verwende FilePicker
        const result = await FilePicker.getDocumentAsync({
            type: "image/*",
            copyToCacheDirectory: false,
        });
        if (!result.canceled && result.assets[0].uri) {
            setStartTime(performance.now()); // Start measuring time after image is selected
            setFileUri(result.assets[0].uri);
            setError(null);
        } else {
            setError("Kein Bild ausgewählt.");
        }
    };

    // This function is called once the image is fully loaded
    const onImageLoad = () => {
        if (startTime) {
            const endTime = performance.now();
            const duration = endTime - startTime; // Measure time taken to load image
            setResults((prevResults) => [duration, ...prevResults]);
            setStartTime(null); // Reset start time after image is loaded
        }
    };

    const median = calculateMedian(results);
    const mean = calculateMean(results);

    return (
        <View style={styles.container}>
            <Text>Upload</Text>
            <Text>Median: {median.toFixed(5)} ms</Text>
            <Text>Mittelwert: {mean.toFixed(5)} ms</Text>
            <Text>Letzte Ergebnisse</Text>
            <FlatList
                data={results}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <Text>{item.toFixed(5)} ms</Text>
                )}
            />
            <Pressable style={styles.button} onPress={pickImage}>
                <Text style={{color: "white"}}>Lade ein Bild hoch</Text>
            </Pressable>

            {/* Image anzeigen */}
            {fileUri && (
                <Image
                    source={{uri: fileUri}}
                    style={{width: 200, height: 200, marginTop: 20}}
                    onLoad={onImageLoad} // onLoad triggers when the image is fully loaded
                />
            )}

            {/* Fehler anzeigen */}
            {error && (
                <Text style={{color: "red", marginTop: 20}}>{error}</Text>
            )}
        </View>
    );
};
