import 'package:faker/faker.dart';
import 'package:flutter/material.dart';
import 'package:flutter_frontend/config.dart';

import '../helper.dart';

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
            title: Text('${items.length - index} - ${items[index]}'),
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
  final List<double> _durations = [];
  bool _showList = false;
  DateTime? _startTime;
  double? _duration;

  @override
  void initState() {
    super.initState();
    var faker = Faker();
    _items = List.generate(
        listSize, (index) => '${index + 1}. ${faker.lorem.words(10)}');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("List $listSize"),
      ),
      body: Center(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Text(
                _duration != null ? 'Dauer: $_duration ms' : 'Dauer: -',
              ),
            ),
            if (_durations.isNotEmpty)
              Column(
                children: [
                  Text(
                    'Median: ${calculateMedian(_durations)} ms',
                    style: const TextStyle(fontWeight: FontWeight.bold),
                  ),
                  Text(
                    'Mean: ${calculateMean(_durations)} ms',
                    style: const TextStyle(fontWeight: FontWeight.bold),
                  ),
                ],
              ),
            DurationList(
              items: _durations.map((duration) => '$duration ms').toList(),
            ),
            ElevatedButton(
              onPressed: _toggleListVisibility,
              child:
                  Text(_showList ? 'Verstecke die Liste' : 'Zeige die Liste'),
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
            _duration = duration as double?;
            _durations.insert(0, duration as double);
          });
        });
      } else {
        _duration = null;
      }
    });
  }
}
