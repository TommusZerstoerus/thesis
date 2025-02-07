import React, { useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { styles } from '../styles/styles';
import { calculateMean, calculateMedian } from '../helper';
import {faker} from "@faker-js/faker";

const generateFakeData = (count: number) => {
    return Array.from({ length: count }, () => ({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
    }));
};

export const FakerBenchmark = () => {
    const [durations, setDurations] = useState<number[]>([]);
    const [loading, setLoading] = useState(false);
    const [generatedCount, setGeneratedCount] = useState(0);
    const dataSize = 10000;

    const startBenchmark = () => {
        setLoading(true);
        const startTime = performance.now();

        setTimeout(() => {
            generateFakeData(dataSize);
            const endTime = performance.now();
            const duration = endTime - startTime;
            setGeneratedCount(dataSize);
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
                onPress={!loading ? startBenchmark : undefined}
                disabled={loading}
            >
                <Text style={styles.text}>
                    {loading ? 'Berechnet...' : 'Benchmark durchführen'}
                </Text>
            </Pressable>

            {generatedCount > 0 && <Text>Generierte Einträge: {generatedCount}</Text>}
            {durations.length > 0 && <Text>Letztes Ergebnis: {durations[0].toFixed(3)} ms</Text>}
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
