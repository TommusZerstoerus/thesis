import React from "react";
import {AnimatedCubesContainer} from "./src/page/Cube";
import {NavigationContainer} from "@react-navigation/native";
import {Home} from "./src/page/Home";
import {Storage} from "./src/page/Storage";
import {createDrawerNavigator, DrawerItem} from "@react-navigation/drawer";
import {cubeCount, dataSize, primeLimit, stateManagementSize} from "./src/config";
import {Prime} from "./src/page/Prime";
import {StateManagement} from "./src/page/StateManagement";
import {Form} from "./src/page/Form";
import {Linking, Pressable, View} from "react-native";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Group>
                    <Drawer.Screen name={"Home"} component={Home}/>
                    <Drawer.Screen name={`Cube ${cubeCount}`} component={AnimatedCubesContainer}/>
                    <Drawer.Screen name={`Storage ${dataSize}`} component={Storage}/>
                    <Drawer.Screen name={`Prime ${primeLimit}`} component={Prime}/>
                    <Drawer.Screen name={`Statemanagement ${stateManagementSize}`} component={StateManagement}/>
                </Drawer.Group>
                <Drawer.Screen name={"Form"} component={Form}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const Separator = () =>
    <View style={{
        flex: 1,
        backgroundColor: "gray",
    }}
    />;



