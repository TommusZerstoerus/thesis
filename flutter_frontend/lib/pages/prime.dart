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
    List<bool> primes = List.generate(limit + 1, (_) => true);
    primes[0] = primes[1] = false;

    for (int i = 2; i <= sqrt(limit).toInt(); i++) {
      if (primes[i]) {
        for (int j = i * i; j <= limit; j += i) {
          primes[j] = false;
        }
      }
    }

    return List.generate(limit + 1, (index) => primes[index] ? index : -1)
        .where((index) => index != -1)
        .toList();
  }

  void _startCalculation() {
    setState(() {
      _isLoading = true;
      _result = null;
    });

    final startTime = DateTime.now();

    Future.delayed(Duration.zero, () {
      final primeNumbers = sieveOfEratosthenes(primeLimit);
      final endTime = DateTime.now();
      final duration = endTime.difference(startTime).inMilliseconds.toDouble();

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
              child: Text(_isLoading ? 'Berechnet...' : 'Benchmark durchführen'),
            ),
            const SizedBox(height: 16),
            if (_result != null)
              Text('Primzahlen bis $primeLimit: ${_result?.length}'),
            if (_durations.isNotEmpty)
              Text("Letztes Ergebnis: ${_durations.first.toStringAsFixed(3)} ms"),
            Text('Median: ${median.toStringAsFixed(3)} ms'),
            Text('Mittelwert: ${mean.toStringAsFixed(3)} ms'),
            const SizedBox(height: 16),
            const Text('Letzte Ergebnisse'),
            Expanded(
              child: ListView.builder(
                shrinkWrap: true,
                itemCount: _durations.length,
                itemBuilder: (context, index) {
                  return ListTile(
                    title: Text(
                      '${_durations.length - index}: ${_durations[index].toStringAsFixed(3)} ms',
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
