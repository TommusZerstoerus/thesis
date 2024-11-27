import 'package:flutter/material.dart';
import 'package:flutter_frontend/pages/list.dart';
import 'package:flutter_frontend/pages/statemanagement.dart';
import 'package:flutter_frontend/pages/storage.dart';

import 'animated_cube_screen.dart';
import 'fibonacci.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Home"),
      ),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: <Widget>[
            const DrawerHeader(
              decoration: BoxDecoration(
                color: Colors.blue,
              ),
              child: Text(
                'Benchmarks',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 24,
                ),
              ),
            ),
            ListTile(
              title: const Text('Cube'),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => const AnimatedCubeScreen()),
                );
              },
            ),
            ListTile(
              title: const Text('List'),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => const SimpleListScreen()),
                );
              },
            ),
            ListTile(
              title: const Text('Storage'),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => const StorageScreen()),
                );
              },
            ),
            ListTile(
              title: const Text('Fibonacci'),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => const FibonacciScreen()),
                );
              },
            ),
            ListTile(
              title: const Text('State Management'),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => const StateManagementScreen()),
                );
              },
            )
          ],
        ),
      ),
      body: const Center(
        child: Column(
          children: [
            Text('Flutter Benchmarks'),
            Text('Bachelor Projekt von Tom Becke')
          ],
        ),
      ),
    );
  }
}

