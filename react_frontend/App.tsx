import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import {AnimatedCubesContainer} from "./src/page/StressTest";

export default function App() {
  return (
      <View>
        <AnimatedCubesContainer />
      </View>
  );
}

