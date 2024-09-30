
import React from "react";
import {AnimatedCubesContainer} from "./src/page/CubeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {ShowList} from "./src/page/ShowList";
import {Home} from "./src/page/Home";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Upload} from "./src/page/Upload";
import {createDrawerNavigator} from "@react-navigation/drawer";

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Drawer.Navigator>
              <Drawer.Screen name={"Home"} component={Home}/>
              <Drawer.Screen name={"Cube"} component={AnimatedCubesContainer}/>
              <Drawer.Screen name={"List"} component={ShowList}/>
              <Drawer.Screen name={"Upload"} component={Upload}/>
          </Drawer.Navigator>
      </NavigationContainer>
  );
}

