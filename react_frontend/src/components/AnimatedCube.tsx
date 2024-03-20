import React, {useState, useEffect} from 'react';
import {Text, Animated, Dimensions, View} from 'react-native';

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

export const AnimatedCube = () => {
    const [position] = useState(new Animated.ValueXY({x: 0, y: 0}));
    const x = useState(0)
    const y = useState(0)
    const [rotation] = useState(new Animated.Value(0));
    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        const animateCube = () => {
            const maxX = windowWidth - cubeSize;
            const maxY = windowHeight - cubeSize;
            const newX = Math.random() * maxX;
            const newY = Math.random() * maxY;


            Animated.timing(position, {
                toValue: {x: newX, y: newY},
                duration: 2000,
                useNativeDriver: false,
            }).start(() => animateCube());
        };

        const animateRotation = () => {
            Animated.loop(
                Animated.timing(rotation, {
                    useNativeDriver: false,
                    toValue: 1,
                    duration: 2000
                })
            ).start(() => animateRotation());
        };

        const changeColor = () => {
            const newIndex = Math.floor(Math.random() * COLORS.length);
            setColorIndex(newIndex);
        };

        const animationInterval = setInterval(() => {
            changeColor();
        }, 2000);

        animateRotation();
        animateCube();

        return () => {
            clearInterval(animationInterval);
            rotation.removeAllListeners();
            position.removeAllListeners();
        };
    }, []);

    const rotate = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const backgroundColor = COLORS[colorIndex];

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
