import 'dart:async';
import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:file_picker/file_picker.dart';

class UploadScreen extends StatefulWidget {
  const UploadScreen({super.key});

  @override
  UploadScreenState createState() => UploadScreenState();
}

class UploadScreenState extends State<UploadScreen> {
  File? _image; // Für Android/iOS
  XFile? _webImage; // Für Web
  String? _error;
  final List<double> _results = [];

  Future<void> _pickImage() async {
    final picker = ImagePicker();

    final startTime = DateTime.now();

    if (kIsWeb) {
      final result = await FilePicker.platform.pickFiles(type: FileType.image);
      if (result != null && result.files.single.bytes != null) {
        setState(() {
          _webImage = XFile.fromData(result.files.single.bytes!,
              name: result.files.single.name);
          _error = null;
        });
      } else {
        setState(() {
          _error = 'Kein Bild ausgewählt.';
        });
      }
    } else {
      final pickedFile = await picker.pickImage(source: ImageSource.gallery);

      if (pickedFile != null) {
        setState(() {
          _image = File(pickedFile.path);
          _error = null;
        });
      } else {
        setState(() {
          _error = 'Kein Bild ausgewählt.';
        });
      }
    }

    final endTime = DateTime.now();
    final duration = endTime.difference(startTime).inMilliseconds.toDouble();
    setState(() {
      _results.insert(0, duration);
    });
  }

  double _calculateMedian(List<double> arr) {
    if (arr.isEmpty) return 0;

    List<double> sortedArr = List.from(arr)..sort();
    int middleIndex = sortedArr.length ~/ 2;

    if (sortedArr.length % 2 == 0) {
      return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
    } else {
      return sortedArr[middleIndex];
    }
  }

  double _calculateMean(List<double> arr) {
    if (arr.isEmpty) return 0;

    double sum = arr.reduce((a, b) => a + b);
    return sum / arr.length;
  }

  @override
  Widget build(BuildContext context) {
    double median = _calculateMedian(_results);
    double mean = _calculateMean(_results);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Upload'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            const Text('Upload'),
            const SizedBox(height: 10),
            Text('Median: ${median.toStringAsFixed(5)} ms'),
            Text('Mittelwert: ${mean.toStringAsFixed(5)} ms'),
            const SizedBox(height: 10),
            const Text('Letzte Ergebnisse'),
            Expanded(
              child: ListView.builder(
                itemCount: _results.length,
                itemBuilder: (context, index) {
                  return ListTile(
                    title: Text('${_results[index].toStringAsFixed(5)} ms'),
                  );
                },
              ),
            ),
            ElevatedButton(
              onPressed: _pickImage,
              child: const Text('Lade ein Bild hoch'),
            ),
            if (!kIsWeb && _image != null)
              Container(
                margin: const EdgeInsets.only(top: 20),
                width: 200,
                height: 200,
                child: Image.file(_image!),
              ),
            if (kIsWeb && _webImage != null)
              Container(
                margin: const EdgeInsets.only(top: 20),
                width: 200,
                height: 200,
                child: Image.network(_webImage!.path),
              ),
            if (_error != null)
              Text(
                _error!,
                style: const TextStyle(color: Colors.red),
              ),
          ],
        ),
      ),
    );
  }
}
