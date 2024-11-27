import 'package:flutter/material.dart';
import 'package:flutter_frontend/helper.dart';

import '../config.dart';

class FibonacciScreen extends StatefulWidget {
  const FibonacciScreen({super.key});

  @override
  State<FibonacciScreen> createState() => _FibonacciScreenState();
}

class _FibonacciScreenState extends State<FibonacciScreen> {
  final List<double> _durations = [];
  bool _isLoading = false;
  int? _result;

  int calculateFibonacci(int n) {
    if (n <= 1) return n;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
  }

  void _startCalculation() {
    setState(() {
      _isLoading = true;
      _result = null;
    });

    final startTime = DateTime.now();

    Future.delayed(Duration.zero, () {
      final fibResult = calculateFibonacci(fibonacciNumber);
      final endTime = DateTime.now();
      final duration = endTime.difference(startTime).inMilliseconds.toDouble();

      setState(() {
        _result = fibResult;
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
        title: const Text('Fibonacci $fibonacciNumber'),
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
            if (_result != null) Text('Result: $_result'),
            if (_durations.isNotEmpty) ...[
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
          ],
        ),
      ),
    );
  }
}
