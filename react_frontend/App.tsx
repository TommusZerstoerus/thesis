
import React from "react";
import {AnimatedCubesContainer} from "./src/page/StressTest";
import {NavigationContainer} from "@react-navigation/native";
import {ShowList} from "./src/page/ShowList";
import {Home} from "./src/page/Home";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Upload} from "./src/page/Upload";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Tab.Navigator initialRouteName="Home"
                         screenOptions={{
                             tabBarStyle: {
                                 backgroundColor: '#348F50',
                                 borderTopWidth: 0,
                             },
                             headerShown: false,
                             tabBarLabelPosition: 'below-icon',
                             tabBarActiveTintColor: 'white',
                             tabBarInactiveTintColor: 'black',
                         }}
                         backBehavior={'initialRoute'}
          >
              <Tab.Screen options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons name="home" color={color} size={26}/>
                  ),
              }} name="Home" component={Home}/>
              <Tab.Screen options={{
                  tabBarLabel: 'Cubes',
                  tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons name="cube" color={color} size={26}/>
                  ),
              }} name="Cubes" component={AnimatedCubesContainer}/>
              <Tab.Screen options={{
                  tabBarLabel: 'List',
                  tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26}/>
                    ),
              }} name="List" component={ShowList}/>
              <Tab.Screen options={{
                  tabBarLabel: 'Upload',
                  tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons name="upload" color={color} size={26}/>
                  ),
              }} name="Upload" component={Upload}/>
          </Tab.Navigator>
        <AnimatedCubesContainer />
      </NavigationContainer>
  );
}

