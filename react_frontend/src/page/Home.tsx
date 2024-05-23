import {ScrollView, Text, View} from "react-native";
import {styles} from "../styles/styles";


export const Home = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>React Native Benchmarks</Text>
            <Text>Bachelor Projekt von Tom Becke</Text>
        </ScrollView>
    );
}