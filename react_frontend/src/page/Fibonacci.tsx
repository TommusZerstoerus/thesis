import React, {useState} from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import {styles} from "../styles/styles";
import {calculateMean, calculateMedian} from "../helper";
import {fibonacciNumber} from "../config";

const calculateFibonacci = (n: number): number => {
    if (n <= 1) return n;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};

export const Fibonacci = () => {
    const [durations, setDurations] = useState<number[]>([]);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<number | null>(null);

    const calculateInBackground = () => {
        setLoading(true);
        const startTime = performance.now();
        setTimeout(() => {
            const fibResult = calculateFibonacci(fibonacciNumber);
            const endTime = performance.now();
            const duration = endTime - startTime;
            setResult(fibResult);
            setDurations((prevDurations) => [duration, ...prevDurations]);
            setLoading(false);
        }, 0);
    };

    const median = calculateMedian(durations);
    const mean = calculateMean(durations);

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={!loading ? calculateInBackground : undefined}
                disabled={loading}
            >
                <Text style={styles.text}>
                    {loading ? 'Berechnet...' : 'Benchmark durchführen'}
                </Text>
            </Pressable>
            {result !== null && <Text>Result: {result}</Text>}
            <Text>Median: {median.toFixed(3)} ms</Text>
            <Text>Mittelwert: {mean.toFixed(3)} ms</Text>
            <Text>Letzte Ergebnisse:</Text>
            <FlatList
                data={durations}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({item, index}) => (
                    <Text>
                        {durations.length - index}: {item.toFixed(3)} ms
                    </Text>
                )}
            />
        </View>
    );
};