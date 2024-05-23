import 'dart:math';

import 'package:flutter/material.dart';

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
