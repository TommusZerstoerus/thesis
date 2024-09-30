import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet, View, Text, Dimensions} from 'react-native';
import {AnimatedCube} from "../components/AnimatedCube";

const COLORS = [
    'red',
    'yellow',
    'green',
    'blue',
    'pink',
    'orange',
    'purple',
    'teal',
    'deepPurple',
    'lightGreen',
    'amber',
];

const cubeCount: number = 10
export const AnimatedCubesContainer = () => {
    return (
        <View>
            {[...Array(cubeCount)].map((_, index) => (
                <AnimatedCube key={index}/>
            ))}
        </View>
    );
};

