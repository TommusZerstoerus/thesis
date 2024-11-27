import React, {useState} from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import {styles} from "../styles/styles";
import {stateManagementSize} from "../config";
import {calculateMean, calculateMedian} from "../helper";

export const StateManagement = () => {
    const [items, setItems] = useState<string[]>([]);
    const [durations, setDurations] = useState<number[]>([]);
    const [duration, setDuration] = useState<number | null>(null);

    const runBenchmark = () => {
        const startTime = performance.now();
        const newItems = Array.from({length: stateManagementSize}, (_, i) => `Item ${i + 1}`);
        setItems(newItems);
        setTimeout(() => {
            setItems([]);
            const endTime = performance.now();
            const totalDuration = endTime - startTime;
            setDuration(totalDuration);
            setDurations((prevDurations) => [totalDuration, ...prevDurations]);
        }, 50);
    };

    const median = calculateMedian(durations);
    const mean = calculateMean(durations);

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={runBenchmark}>
                <Text style={styles.text}>Benchmark durchführen</Text>
            </Pressable>
            {duration !== null && (
                <Text>
                    Aktuelle Laufzeit: {duration.toFixed(3)} ms
                </Text>
            )}
            <Text>Median: {median.toFixed(3)} ms</Text>
            <Text>Mittelwert: {mean.toFixed(3)} ms</Text>
            <Text>Letzte Ergebnisse:</Text>
            <FlatList
                style={{maxHeight: 50}}
                data={durations}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({item, index}) => (
                    <Text>
                        {durations.length - index}: {item.toFixed(3)} ms
                    </Text>
                )}
            />
            <View style={{flexDirection: 'row', flexWrap: 'wrap', flex: 1, overflow: "visible"}}>
                {items.map((item, index) => (
                    <Text key={index}>
                        {item}
                    </Text>
                ))}
            </View>
        </View>
    );
};
