import React, { useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { styles } from "../styles/styles";
import { calculateMean, calculateMedian } from "../helper";
import {primeLimit} from "../config";

const sieveOfEratosthenes = (limit: number): number[] => {
    const primes: boolean[] = Array(limit + 1).fill(true);
    primes[0] = primes[1] = false;

    for (let i = 2; i <= Math.sqrt(limit); i++) {
        if (primes[i]) {
            for (let j = i * i; j <= limit; j += i) {
                primes[j] = false;
            }
        }
    }

    return primes
        .map((isPrime, index) => (isPrime ? index : -1))
        .filter((index) => index !== -1);
};

export const Prime= () => {
    const [durations, setDurations] = useState<number[]>([]);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<number[] | null>(null);

    const calculateInBackground = () => {
        setLoading(true);
        const startTime = performance.now();

        setTimeout(() => {
            const primeNumbers = sieveOfEratosthenes(primeLimit);
            const endTime = performance.now();
            const duration = endTime - startTime;
            setResult(primeNumbers);
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

            {result !== null && (
                <Text>Primzahlen bis {primeLimit}: {result.length}</Text>
            )}

            <Text>Median: {median.toFixed(3)} ms</Text>
            <Text>Mittelwert: {mean.toFixed(3)} ms</Text>
            <Text>Letzte Ergebnisse:</Text>

            <FlatList
                data={durations}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <Text>
                        {durations.length - index}: {item.toFixed(3)} ms
                    </Text>
                )}
            />
        </View>
    );
};
