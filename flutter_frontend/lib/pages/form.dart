import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

class FormScreen extends StatefulWidget {
  const FormScreen({Key? key}) : super(key: key);

  @override
  State<FormScreen> createState() => _FormScreenState();
}

class _FormScreenState extends State<FormScreen> {
  final TextEditingController _textController = TextEditingController();
  bool _isChecked = false;
  DateTime _selectedDate = DateTime.now();
  double _sliderValue = 0;
  String _selectedOption = '1';

  Future<void> _pickDate(BuildContext context) async {
    if (Theme.of(context).platform == TargetPlatform.iOS) {
      showCupertinoModalPopup(
        context: context,
        builder: (_) => Container(
          height: 250,
          color: Colors.white,
          child: CupertinoDatePicker(
            mode: CupertinoDatePickerMode.date,
            initialDateTime: _selectedDate,
            onDateTimeChanged: (date) {
              setState(() {
                _selectedDate = date;
              });
            },
          ),
        ),
      );
    } else {
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
  }

  void _handleSubmit() {
    final String text =
        'Du hast das Formular mit dem Text: "${_textController.text}", Datum: "${_selectedDate.toLocal().toString().split(' ')[0]}", Option: "$_selectedOption", Slider "$_sliderValue", eingereicht.';

    if (Theme.of(context).platform == TargetPlatform.iOS ||
        Theme.of(context).platform == TargetPlatform.android) {
      showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: const Text("Erfolgreich"),
            content: Text(text),
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
    } else {
      showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: const Text("Web-Erfolgsmeldung"),
            content: Text(text),
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
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Formular")),
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
              TextField(
                controller: _textController,
                decoration: const InputDecoration(
                  labelText: "Eingabefeld",
                  border: OutlineInputBorder(),
                ),
              ),
              const SizedBox(height: 16),
              Row(
                children: [
                  const Text("Switch:"),
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
              Text("Slider: $_sliderValue"),
              Slider(
                value: _sliderValue,
                onChanged: (value) {
                  setState(() {
                    _sliderValue = value;
                  });
                },
                min: 0,
                max: 100,
                divisions: 100,
                label: _sliderValue.round().toString(),
              ),
              const SizedBox(height: 16),
              const Text("Radio Buttons:"),
              Row(
                children: ['1', '2', '3']
                    .map((value) => Row(
                  children: [
                    Radio<String>(
                      value: value,
                      groupValue: _selectedOption,
                      onChanged: (value) {
                        setState(() {
                          _selectedOption = value!;
                        });
                      },
                    ),
                    Text(value),
                  ],
                ))
                    .toList(),
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
                onPressed: _handleSubmit,
                child: const Text("Absenden"),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
