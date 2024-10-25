import 'package:faker/faker.dart';
import 'package:flutter/material.dart';
import 'package:flutter_frontend/config.dart';

class ItemList extends StatelessWidget {
  final List<String> items;

  const ItemList({super.key, required this.items});

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: RepaintBoundary(
        child: ListView.builder(
          itemCount: items.length,
          itemBuilder: (context, index) {
            return ListTile(
              title: Text(items[index]),
            );
          },
        ),
      ),
    );
  }
}

class DurationList extends StatelessWidget {
  final List<String> items;

  const DurationList({super.key, required this.items});

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: const BoxConstraints(maxHeight: 100),
      child: ListView.builder(
        shrinkWrap: true,
        physics: const ScrollPhysics(),
        itemCount: items.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(items[index]),
          );
        },
      ),
    );
  }
}

class SimpleListScreen extends StatefulWidget {
  const SimpleListScreen({super.key});

  @override
  SimpleListScreenState createState() => SimpleListScreenState();
}

class SimpleListScreenState extends State<SimpleListScreen> {
  late List<String> _items;
  final List<int> _durations = [];
  bool _showList = false;
  DateTime? _startTime;
  int? _duration;

  @override
  void initState() {
    super.initState();
    var faker = Faker();
    _items = List.generate(listSize, (index) => '${index + 1}. ${faker.lorem.words(10)}');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("List"),
      ),
      body: Center(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Text(
                _duration != null
                    ? 'Dauer: $_duration ms'
                    : 'Dauer: -',
              ),
            ),
            if (_durations.isNotEmpty)
              Column(
                children: [
                  Text(
                    'Median: ${_calculateMedian()} ms',
                    style: const TextStyle(fontWeight: FontWeight.bold),
                  ),
                  Text(
                    'Mean: ${_calculateMean()} ms',
                    style: const TextStyle(fontWeight: FontWeight.bold),
                  ),
                ],
              ),
            DurationList(
              items: _durations.map((duration) => '$duration ms').toList(),
            ),
            ElevatedButton(
              onPressed: _toggleListVisibility,
              child: Text(_showList ? 'Verstecke die Liste' : 'Zeige die Liste'),
            ),
            if (_showList) ItemList(items: _items),
          ],
        ),
      ),
    );
  }

  void _toggleListVisibility() {
    setState(() {
      _showList = !_showList;
      if (_showList) {
        _startTime = DateTime.now();
        WidgetsBinding.instance.addPostFrameCallback((_) {
          final endTime = DateTime.now();
          final duration = endTime.difference(_startTime!).inMilliseconds;
          setState(() {
            _duration = duration;
            _durations.insert(0, duration);
          });
        });
      } else {
        _duration = null;
      }
    });
  }

  num _calculateMedian() {
    List<int> sortedDurations = [..._durations]..sort();
    int count = sortedDurations.length;
    if (count % 2 == 0) {
      return (sortedDurations[count ~/ 2 - 1] + sortedDurations[count ~/ 2]) / 2;
    } else {
      return sortedDurations[count ~/ 2];
    }
  }

  double _calculateMean() {
    if (_durations.isEmpty) return 0;
    return _durations.reduce((a, b) => a + b) / _durations.length;
  }
}