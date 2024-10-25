import 'package:flutter/material.dart';

import '../components/animated_cube.dart';
import '../config.dart';

class AnimatedCubeScreen extends StatefulWidget {
  const AnimatedCubeScreen({Key? key}) : super(key: key);

  @override
  _AnimatedCubeScreenState createState() => _AnimatedCubeScreenState();
}

class _AnimatedCubeScreenState extends State<AnimatedCubeScreen>
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
      cubeCount,
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
        title: const Text("Cube"),
      ),
      body: Stack(
        children: _cubes,
      ),
    );
  }
}
