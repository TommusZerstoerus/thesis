import React, {useEffect, useState} from 'react';
import {Animated, Dimensions, Text, View} from 'react-native';

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
