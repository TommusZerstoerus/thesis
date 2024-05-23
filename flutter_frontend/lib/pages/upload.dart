import 'package:flutter/material.dart';

class UploadScreen extends StatefulWidget {
  const UploadScreen({super.key});

  @override
  _UploadScreenState createState() => _UploadScreenState();
}

class _UploadScreenState extends State<UploadScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Upload Benchmark"),
      ),
      body: const Center(
        child: Column(
          children: [
            Text("Upload Benchmark"),
          ],
        ),
      ),
    );
  }

  void main() {
    runApp(
      const MaterialApp(
        home: UploadScreen(),
      ),
    );
  }
}
