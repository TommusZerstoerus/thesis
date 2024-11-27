
import React from "react";
import {AnimatedCubesContainer} from "./src/page/Cube";
import {NavigationContainer} from "@react-navigation/native";
import {List} from "./src/page/List";
import {Home} from "./src/page/Home";
import {Storage} from "./src/page/Storage";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {cubeCount, dataSize, fibonacciNumber, listSize, stateManagementSize} from "./src/config";
import {Fibonacci} from "./src/page/Fibonacci";
import {StateManagement} from "./src/page/StateManagement";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Drawer.Navigator>
              <Drawer.Screen name={"Home"} component={Home}/>
              <Drawer.Screen name={`Cube ${cubeCount}`} component={AnimatedCubesContainer}/>
              <Drawer.Screen name={`List ${listSize}`} component={List}/>
              <Drawer.Screen name={`Storage ${dataSize}`} component={Storage}/>
              <Drawer.Screen name={`Fibonacci ${fibonacciNumber}`} component={Fibonacci}/>
              <Drawer.Screen name={`Statemanagement ${stateManagementSize}`} component={StateManagement}/>
          </Drawer.Navigator>
      </NavigationContainer>
  );
}

