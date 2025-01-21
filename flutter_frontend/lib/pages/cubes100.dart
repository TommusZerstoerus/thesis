import 'package:flutter/material.dart';
import 'package:flutter_frontend/config.dart';

import '../components/animated_cube.dart';

class Cube100Screen extends StatefulWidget {
  const Cube100Screen({super.key});

  @override
  Cube100ScreenState createState() => Cube100ScreenState();
}

class Cube100ScreenState extends State<Cube100Screen>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late List<Widget> _cubes;
  late List<Color> _colorList;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 2),
    )..repeat(reverse: true);

    _colorList = [
      Colors.red,
      Colors.yellow,
      Colors.green,
      Colors.blue,
      Colors.pink,
      Colors.orange,
      Colors.purple,
      Colors.teal,
      Colors.deepPurple,
      Colors.lightGreen,
      Colors.amber,
    ];

    _cubes = List.generate(
      cubeCount100,
          (index) => AnimatedCube(
        controller: _controller,
        colorList: _colorList,
      ),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Cube $cubeCount100"),
      ),
      body: Stack(
        children: _cubes,
      ),
    );
  }
}