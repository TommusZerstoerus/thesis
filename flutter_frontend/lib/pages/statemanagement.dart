import 'package:flutter/material.dart';
import 'package:flutter_frontend/helper.dart';

import '../config.dart';

class StateManagementScreen extends StatefulWidget {
  const StateManagementScreen({super.key});

  @override
  State<StateManagementScreen> createState() => _StateManagementScreenState();
}

class _StateManagementScreenState extends State<StateManagementScreen> {
  final List<double> _durations = [];
  final List<String> _items = [];
  double? _lastDuration;

  void _runBenchmark() {
    final stopwatch = Stopwatch()..start();

    setState(() {
      _items.clear();
      _items.addAll(
          List.generate(stateManagementSize, (index) => 'Item ${index + 1}'));
    });

    Future.delayed(const Duration(milliseconds: 50), () {
      setState(() {
        _items.clear();
        stopwatch.stop();
        final duration = stopwatch.elapsedMilliseconds.toDouble();
        _lastDuration = duration;
        _durations.insert(0, duration);
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    final median = calculateMedian(_durations);
    final mean = calculateMean(_durations);

    return Scaffold(
      appBar: AppBar(
        title: const Text('State Management $stateManagementSize'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            ElevatedButton(
              onPressed: _runBenchmark,
              child: const Text('Benchmark durchführen'),
            ),
            const SizedBox(height: 16),
            if (_lastDuration != null)
              Text(
                  'Aktuelle Laufzeit: ${_lastDuration!.toStringAsFixed(3)} ms'),
            const SizedBox(height: 8),
            Text('Median: ${median.toStringAsFixed(3)} ms'),
            Text('Mittelwert: ${mean.toStringAsFixed(3)} ms'),
            const SizedBox(height: 16),
            const Text('Letzte Ergebnisse:'),
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
            const SizedBox(height: 16),
            Wrap(
              spacing: 8,
              runSpacing: 8,
              children: _items
                  .map((item) => Container(
                padding: const EdgeInsets.all(8),
                decoration: BoxDecoration(
                  border: Border.all(color: Colors.grey),
                  borderRadius: BorderRadius.circular(4),
                ),
                child: Text(item),
              ))
                  .toList(),
            ),
          ],
        ),
      ),
    );
  }
}
