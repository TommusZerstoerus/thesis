import React, {useState} from "react"
import {FlatList, Pressable, Text, View,} from "react-native"
import {styles} from "../styles/styles"
import {calculateMean, calculateMedian} from "../helper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {faker} from "@faker-js/faker";
import {dataSize} from "../config";

type jsonObject = {
    words: string;
};

const generateData = (): jsonObject[] => {
    const data: jsonObject[] = [];
    for (let i = 0; i < dataSize; i++) {
        data.push({words: faker.lorem.words(10)});
    }
    return data;
};

export const Storage = () => {
    const [results, setResults] = useState<number[]>([]);

    const calculateDuration = (start: number, end: number) => {
        return end - start;
    };

    const startSavingAndLoading = async () => {
        const startTime = performance.now();
        const jsonData = generateData();

        try {
            await AsyncStorage.clear()
            await AsyncStorage.setItem('jsonData', JSON.stringify(jsonData));

            const storedData = await AsyncStorage.getItem('jsonData');
            if (storedData) {
                const parsedData: jsonObject[] = JSON.parse(storedData);
                if (parsedData.length === dataSize) {
                    const endTime = performance.now();
                    const duration = calculateDuration(startTime, endTime);
                    setResults((prevResults) => [duration, ...prevResults]);
                }
            }
        } catch (error) {
            console.error('Fehler beim Speichern und Laden:', error);
        }
    };

    const median = calculateMedian(results);
    const mean = calculateMean(results);

    return (
        <View style={styles.container}>
            <Text>Median: {median.toFixed(3)} ms</Text>
            <Text>Mittelwert: {mean.toFixed(3)} ms</Text>
            <Text>Letzte Ergebnisse</Text>
            <FlatList
                data={results}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({item, index}) => (
                    <Text>{results.length - index}: {item.toFixed(3)} ms</Text>
                )}
            />
            <Pressable style={styles.button} onPress={startSavingAndLoading}>
                <Text style={{color: 'white'}}>Benchmark durchführen</Text>
            </Pressable>
        </View>
    );
};
