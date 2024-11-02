
import React from "react";
import {AnimatedCubesContainer} from "./src/page/Cube";
import {NavigationContainer} from "@react-navigation/native";
import {List} from "./src/page/List";
import {Home} from "./src/page/Home";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Storage} from "./src/page/Storage";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {cubeCount, dataSize, listSize} from "./src/config";

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Drawer.Navigator>
              <Drawer.Screen name={"Home"} component={Home}/>
              <Drawer.Screen name={`Cube ${cubeCount}`} component={AnimatedCubesContainer}/>
              <Drawer.Screen name={`List ${listSize}`} component={List}/>
              <Drawer.Screen name={`Storage ${dataSize}`} component={Storage}/>
          </Drawer.Navigator>
      </NavigationContainer>
  );
}

