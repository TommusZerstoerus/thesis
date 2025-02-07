import {CodePane, CodeSpan, FlexBox, Heading, Image, ListItem, Slide, Text, UnorderedList} from "spectacle";
import React from "react";


export const Implementierung = () => {
    return (
        <>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Implementierung</Heading>
                </FlexBox>
                <UnorderedList>
                    <ListItem>
                        <Text>Expo zur Unterstützung bei React Native</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Nahezu identischer Quellcode</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Empfohlene oder oft genutzte Libraries</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Android Emulator und Chromium Browser in einer VM</Text>
                    </ListItem>
                </UnorderedList>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Würfel React Native</Heading>
                </FlexBox>
                <Text fontStyle="italic" >
                    Durchlauf mit 100 und 1000 Würfeln
                </Text>
                <CodePane stepIndex={0} language="javascript"
                          highlightRanges={[[5, 12], [14, 22], [29, 41], [43, 50], [52, 63], [80, 88], [91, 101], [102, 106]]}>
                    {`
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const cubeSize = 50;

const COLORS = [
    'red',
    'yellow',
    'green',
    'blue',
    'orange',
    'purple',
];

export const AnimatedCubesContainer = ({count}: { count: number }) => {
    return (
        <View>
            {[...Array(count)].map((_, index) => (
                <AnimatedCube key={index}/>
            ))}
        </View>
    );
};

export const AnimatedCube = () => {
    const [position] = useState(new Animated.ValueXY({x: 0, y: 0}));
    const [rotation] = useState(new Animated.Value(0));
    const [colorAnimation] = useState(new Animated.Value(0));

    useEffect(() => {
        const animatePosition = () => {
            const maxX = windowWidth - cubeSize;
            const maxY = windowHeight - cubeSize;
            const newX = Math.random() * maxX;
            const newY = Math.random() * maxY;

            Animated.timing(position, {
                toValue: {x: newX, y: newY},
                duration: 2000,
                useNativeDriver: false
            }).start(() => animatePosition());
        };

        const animateRotation = () => {
            rotation.setValue(0);
            Animated.timing(rotation, {
                useNativeDriver: false,
                toValue: 1,
                duration: 2000,
            }).start(() => animateRotation());
        };

        const animateColor = () => {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(colorAnimation, {
                        toValue: 1,
                        duration: 2000,
                        useNativeDriver: false,
                    }),
                    Animated.timing(colorAnimation, {
                        toValue: 0,
                        duration: 2000,
                        useNativeDriver: false,
                    }),
                ]),
            ).start();
        };

        animateRotation();
        animatePosition();
        animateColor();

        return () => {
            rotation.removeAllListeners();
            position.removeAllListeners();
            colorAnimation.removeAllListeners();
        };
    }, []);

    const rotate = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const backgroundColor = colorAnimation.interpolate({
        inputRange: COLORS.map((_, index) => index / (COLORS.length - 1)),
        outputRange: COLORS,
    });

    return (
        <Animated.View style={[
            {
                position: "absolute",
                transform: [
                    {translateX: position.x},
                    {translateY: position.y},
                    {rotate},
                ],
                backgroundColor,
            },
        ]}>
            <View style={{width: cubeSize, height: cubeSize, alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontSize: 30}}>🎲</Text>
            </View>
        </Animated.View>
    );
};
  `}
                </CodePane>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Würfel Flutter</Heading>
                </FlexBox>
                <CodePane stepIndex={1} language={"dart"}
                          highlightRanges={[[17, 27], [42, 51], [53, 60], [62, 69], [74, 81], [82, 86]]}>
                    {`class AnimatedCube extends StatefulWidget {
  final AnimationController controller;
  final List<Color> colorList;

  const AnimatedCube(
      {super.key, required this.controller, required this.colorList});

  @override
  AnimatedCubeState createState() => AnimatedCubeState();
}

class AnimatedCubeState extends State<AnimatedCube> {
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
}`}
                </CodePane>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Speicher Benchmark</Heading>
                </FlexBox>
                <UnorderedList>
                    <ListItem>
                        <Text>Speichern einer großen Menge an Daten auf dem Endgerät</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Messung der Geschwindkeit einer nativen Funktion</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Flutter - Shared Preferences</Text>
                    </ListItem>
                    <ListItem>
                        <Text>React - Async Storage</Text>
                    </ListItem>
                    <ListItem>
                        <FlexBox justifyContent={"space-between"}>
                            <Text>Alogrithmische Berechnung der Daten durch <CodeSpan>faker</CodeSpan></Text>
                            <Image width={150} alt={"faker"} src={"/images/faker.png"}/>
                        </FlexBox>
                    </ListItem>
                </UnorderedList>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Sieb des Eratosthenes Benchmark</Heading>
                </FlexBox>
                <UnorderedList>
                    <ListItem>
                        <Text>Berechnung Anzahl Primzahlen bis zur Zahl <CodeSpan>n</CodeSpan></Text>
                    </ListItem>
                    <ListItem>
                        <Text>Messung der Geschwindigkeit einer rechneninstensiven Aufgabe</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Main Thread wird blockiert um Asynchronität zu vermeiden</Text>
                    </ListItem>
                </UnorderedList>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">State Management Benchmark</Heading>
                </FlexBox>
                <UnorderedList>
                    <ListItem>
                        <Text>Schnelles Wechseln des Zustandes</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Testen einer elementaren Eigenschaft</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Main Thread wird erneut blockiert</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Große Datenmenge im State gespeichert und angezeigt</Text>
                    </ListItem>
                </UnorderedList>
            </Slide>
        </>
    )
}