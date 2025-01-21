import 'dart:async';
import 'dart:convert';

import 'package:faker/faker.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../config.dart';
import '../helper.dart';

class StorageScreen extends StatefulWidget {
  const StorageScreen({super.key});

  @override
  StorageBenchmarkState createState() => StorageBenchmarkState();
}

class StorageBenchmarkState extends State<StorageScreen> {
  List<double> results = [];

  List<Map<String, String>> generateData(int dataSize) {
    final faker = Faker();
    return List.generate(
        dataSize, (index) => {'words': faker.lorem.words(10).join(' ')});
  }

  num calculateDuration(int start, int end) {
    return end - start;
  }

  Future<void> startSavingAndLoading() async {
    final stopwatch = Stopwatch()..start();
    final jsonData = generateData(dataSize);

    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.clear();
      await prefs.setString('jsonData', json.encode(jsonData));

      final storedData = prefs.getString('jsonData');
      if (storedData != null) {
        final List<dynamic> parsedData = json.decode(storedData);
        if (parsedData.length == dataSize) {
          stopwatch.stop();
          final duration = stopwatch.elapsedMilliseconds.toDouble();
          setState(() {
            results.insert(0, duration);
          });
        }
      }
    } catch (error) {
      print('Fehler beim Speichern und Laden: $error');
    }
  }

  @override
  Widget build(BuildContext context) {
    final median = calculateMedian(results);
    final mean = calculateMean(results);

    return Scaffold(
      appBar: AppBar(title: const Text('Storage $dataSize')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            ElevatedButton(
              onPressed: startSavingAndLoading,
              child: const Text('Benchmark durchführen'),
            ),
            const SizedBox(height: 16),
            const Text('Storage Benchmark', style: TextStyle(fontSize: 20)),
            Text('Median: ${median.toStringAsFixed(3)} ms'),
            Text('Mittelwert: ${mean.toStringAsFixed(3)} ms'),
            const SizedBox(height: 16),
            const Text('Letzte Ergebnisse', style: TextStyle(fontSize: 18)),
            SizedBox(
              height: 100,
              child: ListView.builder(
                itemCount: results.length,
                itemBuilder: (context, index) {
                  return Padding(
                    padding: const EdgeInsets.symmetric(vertical: 2),
                    child: Text(
                      '${results.length - index}: ${results[index].toStringAsFixed(3)} ms',
                      textAlign: TextAlign.center,
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}