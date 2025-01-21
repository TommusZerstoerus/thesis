## Expo

Bei der Entwicklung der Benchmarks wurde Expo genutzt um die Implementierung von React Native zu erleichtern. Expo ist ein Framework, welches den Umgang mit React Native verbessert. Es liefert Tools fürs Debugging, leichteres bauen und starten von Nativen Apps und eine große Auswahl an Bibliotheken.

## Grundlegendes

Die Implementierung ist darauf ausgelegt auf beiden Frameworks nahezu identisch zu sein. Es werden Packages genutzt, welche von den Frameworks direkt zur Verfügung gestellt wurden oder welche von den Entwicklern empfohlen wurden.

## Würfel Benchmark

### React Native

Es wurde eine View über den gesamten Anzeigebereich gestaltet. In dieser View wird nun ein Anzahl an Würfel-Komponenten gerendert. Ein Array mit einer Größe von der festgelegten Anzahl an dazustellenden Würfeln, sorgt für die Anzahl der dargestellten Würfel. Die Darstellung eines einzelnen Würfels wird durch eine einzelne Komponente realisiert. Eine Animated View, bei der die Argumente Position, Rotation und Hintergrundfarbe ständig verändert werden, umfasst eine View, in der sich ein Text mit dem Unicode eines Würfels (🎲) befindet, welcher dauerhaft die Farbe wechselt. Alle 2 Sekunden wird die Rotation des Würfels auf den Ursprung gesetzt, sowie eine neue Zeilposition bestimmt und eine neue Farbe festgelegt. Die Argumente Position und Rotation werden über einen useState verwaltet. In einem UseEffect wird dafür gesorgt, dass beim Rendern der Komponente die 3 wichtigen Funktionen aufgerufen werden. Die Bewegung des Würfels wird durch die Funktion animatePosition ermöglicht, welche zufällige x und y Werte bestimmt und diese durch Animated.timing in einem flüssigen Übergang darstellt. Die Rotation wird ebenfalls durch Animated.timing verwaltet, wobei die Rotation bei dem Wert 0 startet und bei 1 endet. Durch Rotation.interpolate wird im späteren Verlauf des Codes festgelegt, dass der Wert 0 für 0deg steht und 1 für 360deg steht. Dies sorgt für eine vollständige Rotierung um die eigene Achse in einem flüssigen Übergang. Farblich ändert sich der Würfel, indem ein Array aus den vorhandenen Farben angelegt wurde und bei dem Aufruf durch das Intervall ein neuer Index bestimmt wird und der jeweilige Farbeintrag aus dem Array ausgelesen wird und der View zugeschrieben wird. 

### Flutter

Die View wird so gestaltet, dass eine festgelegte Anzahl an animierten Würfeln auf dem Bildschirm dargestellt wird. Die Anzahl der Würfel wird durch eine Liste generiert. Jeder Würfel wird durch eine Komponente realisiert, die sowohl in Farbe als auch in Position und Rotation animiert ist. Ein `AnimationController` steuert die Animationen der Würfel, die alle 2 Sekunden wiederholt werden. Die Würfel ändern ihre Farbe kontinuierlich, indem ein `ColorTween` verwendet wird, um zwischen zwei Farben aus einer vordefinierten Liste von Farben zu wechseln. Die Position jedes Würfels wird zufällig bestimmt, wobei der Ausgangs- und Zielort innerhalb des Bildschirms zufällig gesetzt wird. Die Rotation erfolgt kontinuierlich über den Animationscontroller und interpoliert zwischen 0 und 360 Grad. Die Animation wird in einer `AnimatedBuilder`-Komponente gerendert, die sicherstellt, dass der Würfel sich sowohl in Position, Rotation als auch Farbe flüssig ändert.

## Listen Benchmark

## Storage Benchmark