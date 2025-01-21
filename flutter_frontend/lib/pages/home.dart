import 'package:flutter/material.dart';
import 'package:flutter_frontend/pages/form.dart';
import 'package:flutter_frontend/pages/statemanagement.dart';
import 'package:flutter_frontend/pages/storage.dart';

import 'cubes100.dart';
import 'cubes1000.dart';
import 'prime.dart';

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
              title: const Text('Cube 100'),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => const Cube100Screen()),
                );
              },
            ),
            ListTile(
              title: const Text('Cube 1000'),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => const Cube1000Screen()),
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
              title: const Text('Prime'),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => const PrimeScreen()),
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
            ),
            ListTile(
              title: const Text('Form'),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => const FormScreen()),
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