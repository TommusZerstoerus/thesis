# Methoden der Softwareentwicklung

Die Softwareentwicklung lässt sich in verschiedene Kategorien einteilen. Die Backend Entwicklung befasst sich mit der Serverseite einer Anwendung. Es werden Anfragen im HTTP Format an das Backend geschickt und dies verarbeitet die Anfrage und liefert die Antwort zurück. Datenbanken, Microservices und weitere diverse Funktionalitäten werden im Backend umgesetzt und sind dadurch strikt von dem Frontend getrennt. 

Das Frontend beschreibt den Teil einer Anwendung, welcher auf dem Endgerät läuft und dafür zuständig ist Eingaben zu verwalten oder Daten vom Backend darzustellen. Die Benutzeroberfläche wird durch verschiedene Elemente repräsentiert. Diese Elemente dienen der Anzeige von Daten oder bieten dem Benutzer die Möglichkeit, mit der Schnittstelle zu interagieren. Das Frontend steht in dieser Arbeit ausschließlich im Vordergrund, da sich diese Arbeit mit diesem Bereich befasst.

### Maschinencode

Die tiefste Ebene der Programmiersprachen bildet die Maschinesprachen oder Assembler Sprache ab. Diese Sprache wird direkt auf dem Prozessor des Zielsystems interpretiert und ausgeführt. Es gibt verschiedene Assembler Sprachen, welche sich darin unterscheiden, auf welchen Endgeräten sie funktionieren. Jeder Prozessor in einem Endgerät kann andere Befehle verarbeiten, daher muss der Code für das Zielsystem ausgelegt sein. Es gibt für verschiedene Arten von Betriebssystemen und Architekturen jeweils spezifische Assembler Sprachen, da diese nicht universell für jedes Betriebssystem oder Architektur ausgelegt ist und interpretiert werden kann. Daher gilt es zu beachten, dass die Assembler Sprache direkt für das jeweilige Endgerät ausgelegt sein muss. 

### Bytecode

Einige Programmiersprachen verwenden Bytecode, um verständlichen Code zu formulieren, der in Zwischencode übersetzt wird. Dies schafft die Möglichkeit, den geschriebenen Code auf verschiedenen Endgeräten laufen zu lassen, ohne ihn anpassen zu müssen. Beliebte Sprachen, wie Java, die Bytecode nutzen, benötigen eine virtuelle Maschine, welche den Zwischencode ausführen. Die virtuelle Maschine übersetzt den Bytecode zur Laufzeit in Assembler Sprache für das jeweilige Zielsystem oder nutzt entsprechende Routinen um den Bytecode für Assembler verständlich zu machen. Der Vorteil ist es, dass ein Bytecode unabhängig von einer dedizierten Sprache verfasst worden sein kann, ohne dass entsprechende Zielsystem zu kennen. WebAssembly ist ein modernes Beispiel, welches die Definition von Bytecode beschreibt, welcher innerhalb von Webbrowsern ausgeführt werden kann. Die Nutzung des Bytecodes sorgt für eine geringere Ladezeit und eine bessere Leistung.

### Webbasierte Software

Die fundamentalste Möglichkeit, ein Frontend zu entwickeln, ist die webbasierte Programmierung. Hierbei werden mit Hilfe von HTML (Hyper Text Markup Language) Komponenten entwickelt, die in einer Struktur zu einer Oberfläche für den Benutzer angeordnet werden. Das entstandene HTML-Dokument kann von einem Webbrowser gelesen werden und interpretiert werden, wodurch der Webbrowser in der Lage ist, dieses HTML-Dokument darzustellen. HTML-Dateien beinhalten jedoch keine Logik, da diese dies aufgrund ihres Aufbaus nicht zulässt. Der Vorteil der webbasierten Entwicklung ist es, dass die Software auf jedem Endgerät, welches über einen Webbrowser verfügt, problemlos dargestellt werden kann. Die geltenden Kodierungskonventionen stellen sicher, dass es keine Inkonsistenzen bei der Definition von HTML-Dokumenten gibt und dass jeder Webbrowser die HTML-Dateien korrekt interpretieren kann. Um der entstandenen Benutzeroberfläche mit Funktion auszustatten, nutzt man JavaScript. JavaScript ist eine Programmiersprache, die ein Skript definiert, das in eine HTML-Datei eingebettet werden kann. Dadurch lässt sich die Benutzeroberfläche manipulieren oder Anfragen an das Backend senden. JavaScript hat die Besonderheit, dass das Skript erst bei der Laufzeit kompiliert wird, daraus resultieren dynamische Typen. Dieses Problem wurde durch TypeScript ersetzt, welches JavaScript mit dem Vorteil von konsistenten Datentypen erweitert. Ein weitere wichtiger Aspekt ist das DOM (Document Object Model), dieses Objekt dient als Schnittstelle zwischen dynamischen JavaScript und HTML. Im DOM werden alle Elemente zu dynamischen Objekten, auf die zugegriffen werden kann und die manipuliert werden können.

Frameworks sind ein bekannter Standard, welche die Entwicklung von Webanwendungen vereinfachen. Sie ermöglichen eine bessere Strukturierung und Organisation großer Projekte sowie die Wiederverwendbarkeit von Komponenten. Der modulare Aufbau sorgen für einen Strukturierten Aufbau einer Anwendung und vermeiden Inkonsistenzen. Frameworks verwenden zunehmend virtuelle DOMs, die dafür sorgen, dass das Framework das DOM so anpasst, dass die erzeugten Komponenten sinnvoll in das DOM passen und bei Bedarf effizient aktualisiert werden können. Die Verwaltung des Zustandes einer Anwendung oder diverse vorinstallieret Bibliotheken erleichtern die Arbeit im Vergleich zur reinen JavaScript Entwicklung. Frameworks sind häufig mit TypeScript kompatibel, darunter bekannte Frameworks wie Angular, React oder Vue.js.

### Vorteile webbasierter Software

- Funktioniert in jedem Webbrowser auf jedem Endgerät
- Breit gefächertes Expertenwissen
- Viele Frameworks und Bibliotheken erleichtern die Arbeit

### Nachteile webbasierter Software

- Kompilierung nur durch den Webbrowser
- Fehlende Möglichkeit spezifische Funktionen des Endgeräts zu nutzen.
- Geringere Perfomance
- Fehlende Sicherheit durch sichtbaren Code

### Native Frontend Entwicklung - iOS (Swift) Android (Kotlin)

### Cross Platform Entwicklung - React Native oder Flutter