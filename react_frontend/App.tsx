import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Home} from "./src/page/Home";
import {Storage} from "./src/page/Storage";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {dataSize, primeLimit, stateManagementSize} from "./src/config";
import {Prime} from "./src/page/Prime";
import {StateManagement} from "./src/page/StateManagement";
import {Form} from "./src/page/Form";
import {View} from "react-native";
import {Cube100} from "./src/page/Cube100";
import {Cube1000} from "./src/page/Cube1000";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Group>
                    <Drawer.Screen name={"Home"} component={Home}/>
                    <Drawer.Screen name={`Cube 100`} component={Cube100}/>
                    <Drawer.Screen name={`Cube 1000`} component={Cube1000}/>
                    <Drawer.Screen name={`Storage ${dataSize}`} component={Storage}/>
                    <Drawer.Screen name={`Prime ${primeLimit}`} component={Prime}/>
                    <Drawer.Screen name={`Statemanagement ${stateManagementSize}`} component={StateManagement}/>
                </Drawer.Group>
                <Drawer.Screen name={"Form"} component={Form}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}


