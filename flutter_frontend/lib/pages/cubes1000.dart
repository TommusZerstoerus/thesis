import 'package:flutter/material.dart';
import 'package:flutter_frontend/config.dart';

import '../components/animated_cube.dart';

class Cube1000Screen extends StatefulWidget {
  const Cube1000Screen({super.key});

  @override
  Cube1000ScreenState createState() => Cube1000ScreenState();
}

class Cube1000ScreenState extends State<Cube1000Screen>
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
      cubeCount1000,
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
        title: const Text("Cube $cubeCount1000"),
      ),
      body: Stack(
        children: _cubes,
      ),
    );
  }
}