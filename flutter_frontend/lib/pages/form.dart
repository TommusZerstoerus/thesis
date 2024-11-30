import 'package:flutter/material.dart';

class FormScreen extends StatefulWidget {
  const FormScreen({super.key});

  @override
  State<FormScreen> createState() => _FormScreenState();
}

class _FormScreenState extends State<FormScreen> {
  final TextEditingController _controller = TextEditingController();
  bool _isChecked = false;
  DateTime _selectedDate = DateTime.now();

  Future<void> _pickDate(BuildContext context) async {
    final DateTime? pickedDate = await showDatePicker(
      context: context,
      initialDate: _selectedDate,
      firstDate: DateTime(2000),
      lastDate: DateTime(2101),
    );
    if (pickedDate != null && pickedDate != _selectedDate) {
      setState(() {
        _selectedDate = pickedDate;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Formular'),
      ),
      body: Center(
        child: Container(
          width: double.infinity,
          constraints: const BoxConstraints(maxWidth: 600),
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text(
                "Hier steht eine tolle Form.",
                style: TextStyle(fontSize: 18),
              ),
              const SizedBox(height: 16),
              // Text Input Field
              TextField(
                controller: _controller,
                decoration: const InputDecoration(
                  labelText: "Eingabefeld",
                  border: OutlineInputBorder(),
                ),
              ),
              const SizedBox(height: 16),
              Row(
                children: [
                  const Text("Checkbox:"),
                  Switch(
                    value: _isChecked,
                    onChanged: (value) {
                      setState(() {
                        _isChecked = value;
                      });
                    },
                  ),
                ],
              ),
              const SizedBox(height: 16),
              const Text("Datumsauswahl:"),
              Text("${_selectedDate.toLocal()}".split(' ')[0]),
              ElevatedButton(
                onPressed: () => _pickDate(context),
                child: const Text("Datum wählen"),
              ),
              const SizedBox(height: 16),
              ElevatedButton(
                onPressed: () {
                  showDialog(
                    context: context,
                    builder: (BuildContext context) {
                      return AlertDialog(
                        title: const Text("Erfolgreich"),
                        content: Text(
                            "Du hast das Formular mit dem Text: ${_controller.text} und Datum: ${_selectedDate.toLocal()} eingereicht."),
                        actions: <Widget>[
                          TextButton(
                            child: const Text("OK"),
                            onPressed: () {
                              Navigator.of(context).pop();
                            },
                          ),
                        ],
                      );
                    },
                  );
                },
                child: const Text("Absenden"),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
