import {Alert, FlatList, Image, Pressable, Text, View} from "react-native";
import {styles} from "../styles/styles";
import * as ImagePicker from "expo-image-picker";
import {useCallback, useRef, useState} from "react";

export const calculateMedian = (arr: number[]) => {
    if (arr.length === 0) return 0;

    const sortedArr = [...arr].sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedArr.length / 2);

    if (sortedArr.length % 2 === 0) {
        return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
    } else {
        return sortedArr[middleIndex];
    }
};

export const calculateMean = (arr: number[]) => {
    if (arr.length === 0) return 0;

    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
};

export const Upload = () => {
    const [file, setFile] = useState<string | null>(null);
    const [error, setError] = useState(null);
    const [results, setResults] = useState<number[]>([]);

    const pickImage = async () => {
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
            Alert.alert(
                "Permission Denied",
                `Sorry, we need camera  
                 roll permission to upload images.`
            );
        } else {
            const result =
                await ImagePicker.launchImageLibraryAsync();
            const startTime = performance.now()

            if (!result.canceled) {
                const duration = performance.now() - startTime;
                setFile(result.assets[0].uri);
                setResults(prevResults => [duration, ...prevResults]);
                setError(null);
            }
        }
    };

    const renderItem = useCallback(({ item }: { item: number }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.toFixed(5)} ms</Text>
        </View>
    ), []);

    const median = calculateMedian(results);
    const mean = calculateMean(results);

    return (
        <View style={styles.container}>
            <Text>Upload</Text>
            <Text>Letzte Ergebnisse</Text>
            <Text>Median: {median} ms</Text>
            <Text>Mittelwert: {mean} ms</Text>
            <FlatList
                data={results}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
            <Pressable style={styles.button} onPress={pickImage}>
                <Text style={{color: 'white'}}>
                    Lade ein Bild hoch
                </Text>
            </Pressable>
            {file ? (
                <View style={styles.imageContainer}>
                    <Image source={{uri: file}}
                           style={styles.image}/>
                </View>
            ) : (
                <Text style={styles.errorText}>{error}</Text>
            )}
        </View>
    );
}