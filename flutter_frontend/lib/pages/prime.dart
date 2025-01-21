import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_frontend/helper.dart';
import '../config.dart';

class PrimeScreen extends StatefulWidget {
  const PrimeScreen({super.key});

  @override
  State<PrimeScreen> createState() => _PrimeScreenState();
}

class _PrimeScreenState extends State<PrimeScreen> {
  final List<double> _durations = [];
  bool _isLoading = false;
  List<int>? _result;

  List<int> sieveOfEratosthenes(int limit) {
    List<bool> array = List<bool>.filled(limit, true);
    int upperLimit = sqrt(limit).toInt();
    List<int> output = [];

    for (int i = 2; i <= upperLimit; i++) {
      if (array[i]) {
        for (int j = i * i; j < limit; j += i) {
          array[j] = false;
        }
      }
    }

    for (int i = 2; i < limit; i++) {
      if (array[i]) {
        output.add(i);
      }
    }

    return output;
  }

  void _startCalculation() {
    setState(() {
      _isLoading = true;
      _result = null;
    });

    final stopwatch = Stopwatch()..start();

    Future.delayed(Duration.zero, () {
      final primeNumbers = sieveOfEratosthenes(primeLimit);
      stopwatch.stop();
      final duration = stopwatch.elapsedMilliseconds.toDouble();

      setState(() {
        _result = primeNumbers;
        _durations.insert(0, duration);
        _isLoading = false;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    final median = calculateMedian(_durations);
    final mean = calculateMean(_durations);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Primzahlen bis $primeLimit'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: _isLoading ? null : _startCalculation,
              child:
              Text(_isLoading ? 'Berechnet...' : 'Benchmark durchführen'),
            ),
            const SizedBox(height: 16),
            if (_result != null)
              Text('Primzahlen bis $primeLimit: ${_result?.length}'),
            if (_durations.isNotEmpty)
              Text(
                  "Letztes Ergebnis: ${_durations.first.toStringAsFixed(3)} ms"),
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