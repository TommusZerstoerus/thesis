import 'package:flutter/material.dart';
import 'package:faker/faker.dart';
import 'dart:math';

class FakerBenchmarkScreen extends StatefulWidget {
  const FakerBenchmarkScreen({super.key});

  @override
  State<FakerBenchmarkScreen> createState() => _FakerBenchmarkScreenState();
}

class _FakerBenchmarkScreenState extends State<FakerBenchmarkScreen> {
  final List<double> _durations = [];
  bool _isLoading = false;
  int _generatedCount = 0;

  List<Map<String, String>> generateFakeData(int count) {
    final faker = Faker();
    return List.generate(count, (index) => {
      'name': faker.person.name(),
      'email': faker.internet.email(),
      'phone': faker.phoneNumber.us(),
    });
  }

  void _startBenchmark() {
    setState(() {
      _isLoading = true;
      _generatedCount = 0;
    });

    final stopwatch = Stopwatch()..start();

    Future.delayed(Duration.zero, () {
      generateFakeData(10000);
      stopwatch.stop();
      final duration = stopwatch.elapsedMilliseconds.toDouble();

      setState(() {
        _generatedCount = 10000;
        _durations.insert(0, duration);
        _isLoading = false;
      });
    });
  }

  double calculateMedian(List<double> values) {
    if (values.isEmpty) return 0.0;
    List<double> sorted = List.from(values)..sort();
    int middle = sorted.length ~/ 2;
    return sorted.length.isOdd
        ? sorted[middle]
        : (sorted[middle - 1] + sorted[middle]) / 2.0;
  }

  double calculateMean(List<double> values) {
    if (values.isEmpty) return 0.0;
    return values.reduce((a, b) => a + b) / values.length;
  }

  @override
  Widget build(BuildContext context) {
    final median = calculateMedian(_durations);
    final mean = calculateMean(_durations);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Faker Benchmark'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: _isLoading ? null : _startBenchmark,
              child: Text(_isLoading ? 'Berechnet...' : 'Benchmark durchführen'),
            ),
            const SizedBox(height: 16),
            if (_generatedCount > 0)
              Text('Generierte Einträge: $_generatedCount'),
            if (_durations.isNotEmpty)
              Text("Letztes Ergebnis: ${_durations.first.toStringAsFixed(3)} ms"),
            Text('Median: ${median.toStringAsFixed(3)} ms'),
            Text('Mittelwert: ${mean.toStringAsFixed(3)} ms'),
            const SizedBox(height: 16),
            const Text('Letzte Ergebnisse'),
            SizedBox(
              height: 100,
              child: ListView.builder(
                itemCount: _durations.length,
                itemBuilder: (context, index) {
                  return Padding(
                    padding: const EdgeInsets.symmetric(vertical: 2),
                    child: Text(
                      '${_durations.length - index}: ${_durations[index].toStringAsFixed(3)} ms',
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