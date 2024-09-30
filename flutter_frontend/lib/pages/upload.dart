import 'dart:async';
import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:file_picker/file_picker.dart';

class UploadScreen extends StatefulWidget {
  const UploadScreen({super.key});

  @override
  _UploadScreenState createState() => _UploadScreenState();
}

class _UploadScreenState extends State<UploadScreen> {
  File? _image; // For Android/iOS
  XFile? _webImage; // For Web
  String? _error;
  List<double> _results = [];

  Future<void> _pickImage() async {
    final picker = ImagePicker();

    final startTime = DateTime.now();

    if (kIsWeb) {
      // Web: Verwende file_picker zum Auswählen von Bildern
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
      // Android/iOS: Verwende image_picker
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
        title: Text('Upload'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          children: [
            Text('Upload'),
            SizedBox(height: 10),
            Text('Median: ${median.toStringAsFixed(5)} ms'),
            Text('Mittelwert: ${mean.toStringAsFixed(5)} ms'),
            SizedBox(height: 10),
            Text('Letzte Ergebnisse'),
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
              child: Text('Lade ein Bild hoch'),
            ),
            if (!kIsWeb && _image != null)
              Container(
                margin: EdgeInsets.only(top: 20),
                width: 200,
                height: 200,
                child: Image.file(_image!),
              ),
            if (kIsWeb && _webImage != null)
              Container(
                margin: EdgeInsets.only(top: 20),
                width: 200,
                height: 200,
                child: Image.network(_webImage!.path),
              ),
            if (_error != null)
              Text(
                _error!,
                style: TextStyle(color: Colors.red),
              ),
          ],
        ),
      ),
    );
  }
}
