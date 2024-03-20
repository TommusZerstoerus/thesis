import 'dart:math';

import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: "Flutter Stresstest",
      debugShowCheckedModeBanner: false,
      home: AnimatedCubeScreen(),
    );
  }
}

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

    const int cubeCount = 1000;
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
      body: Stack(
        children: _cubes,
      ),
    );
  }
}

class AnimatedCube extends StatefulWidget {
  final AnimationController controller;
  final List<Color> colorList;

  const AnimatedCube(
      {super.key, required this.controller, required this.colorList});

  @override
  _AnimatedCubeState createState() => _AnimatedCubeState();
}

class _AnimatedCubeState extends State<AnimatedCube> {
  late Animation<Color?> _colorAnimation;
  late Color _currentColor;
  late Color _nextColor;

  @override
  void initState() {
    super.initState();

    _currentColor = widget.colorList[0];
    _nextColor = widget.colorList[Random().nextInt(widget.colorList.length)];

    _colorAnimation = ColorTween(
      begin: _currentColor,
      end: _nextColor,
    ).animate(
      CurvedAnimation(
        parent: widget.controller,
        curve: Curves.easeInOut,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;
    final double left = Random().nextDouble() * screenWidth;
    final double top = Random().nextDouble() * screenHeight;

    final Animation<Offset> positionAnimation = Tween<Offset>(
      begin: Offset(left, top),
      end: Offset(Random().nextDouble() * screenWidth,
          Random().nextDouble() * screenHeight),
    ).animate(
      CurvedAnimation(
        parent: widget.controller,
        curve: Curves.easeInOut,
      ),
    );

    return AnimatedBuilder(
      animation: widget.controller,
      builder: (context, child) {
        if (_colorAnimation.status == AnimationStatus.completed) {
          final nextColorIndex = (widget.colorList.indexOf(_currentColor) + 1) %
              widget.colorList.length;
          _currentColor = _nextColor;
          _nextColor = widget.colorList[nextColorIndex];

          _colorAnimation = ColorTween(
            begin: _currentColor,
            end: _nextColor,
          ).animate(
            CurvedAnimation(
              parent: widget.controller,
              curve: Curves.easeInOut,
            ),
          );
        }

        return Positioned(
          left: positionAnimation.value.dx,
          top: positionAnimation.value.dy,
          child: Transform.rotate(
            angle: widget.controller.value * 2 * pi,
            child: Container(
              width: 50,
              height: 50,
              color: _colorAnimation.value,
              child: const Center(
                child: Text(
                  '🎲',
                  style: TextStyle(
                    fontSize: 30,
                  ),
                ),
              ),
            ),
          ),
        );
      },
    );
  }
}
