import React, {useCallback, useState} from "react";
import {Alert, Button, Platform, Pressable, Switch, Text, TextInput, View,} from "react-native";
import DateTimePicker, {DateTimePickerEvent} from "@react-native-community/datetimepicker";
import {DatePickerModal} from "react-native-paper-dates";
import {styles} from "../styles/styles";
import {RadioButton} from "react-native-paper";
import Slider from "@react-native-community/slider";

export const Form = () => {
    const [checked, setChecked] = useState(false);
    const [date, setDate] = useState(new Date());
    const [showWebModal, setShowWebModal] = useState(false);
    const [showMobileModal, setShowMobileModal] = useState(false);
    const [inputText, setInputText] = useState("");
    const [selectedOption, setSelectedOption] = useState("Option1");
    const [sliderValue, setSliderValue] = useState(0);

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date): void => {
        if (selectedDate) {
            setDate(selectedDate);
        }
        setShowMobileModal(false);
    };

    const onDismissSingle = useCallback(() => {
        setShowWebModal(false);
    }, [setShowWebModal]);

    const onConfirmSingle = useCallback(
        ({date}: any) => {
            setShowWebModal(false);
            setDate(date);
        },
        [setShowWebModal, setDate]
    );

    const handleOpenDateTimePicker = () => {
        if (Platform.OS === "web") {
            setShowWebModal(true);
        } else {
            setShowMobileModal(true);
        }
    };


    const handleSubmit = () => {
        const text = `Du hast das Formular mit dem Text: \"${inputText}\", Datum: \"${date.toLocaleDateString()}\", Option: \"${selectedOption}\", Slider \"${sliderValue}, eingereicht.`
        Platform.OS === "web" ?
            window.alert(text) : Alert.alert("Erfolgreich", text, [{text: "OK"}]);
    };

    return (
        <View style={{padding: 16, width: "100%", display: "flex", alignItems: "center"}}>
            <View style={{maxWidth: 600}}>
                <Text style={{fontSize: 18, marginBottom: 8}}>Hier steht eine tolle Form.</Text>

                <Text>Eingabefeld:</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderColor: "gray",
                        borderWidth: 1,
                        marginBottom: 16,
                        paddingHorizontal: 8,
                    }}
                    placeholder="Text eingeben"
                    value={inputText}
                    onChangeText={setInputText}
                />

                <Text>Switch:</Text>
                <Switch
                    value={checked}
                    onValueChange={() => setChecked(!checked)}
                    style={{marginBottom: 16}}
                />
                <Text>Slider {sliderValue}</Text>
                <Slider
                    style={{width: 200, height: 40}}
                    value={sliderValue}
                    onValueChange={(value) => setSliderValue(value)}
                    minimumValue={0}
                    step={1}
                    maximumValue={100}
                />

                <Text>Radio Buttons:</Text>
                <RadioButton.Group
                    onValueChange={(value) => setSelectedOption(value)}
                    value={selectedOption}
                >
                    <View style={{flexDirection: "row", marginBottom: 16}}>
                        <View style={{flexDirection: "row", alignItems: "center", marginRight: 8}}>
                            <RadioButton value="1"/>
                            <Text>1</Text>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center", marginRight: 8}}>
                            <RadioButton value="2"/>
                            <Text>2</Text>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <RadioButton value="3"/>
                            <Text>3</Text>
                        </View>
                    </View>
                </RadioButton.Group>


                <Text>Datumsauswahl:</Text>
                <Text>{date.toLocaleDateString()}</Text>
                <Pressable onPress={handleOpenDateTimePicker} style={styles.button}>
                    <Text style={styles.text}>Datum wählen</Text>
                </Pressable>
                {showMobileModal && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="date"
                        is24Hour={true}
                        onChange={onChange}
                    />
                )}
                <DatePickerModal
                    locale="de"
                    mode="single"
                    emptyLabel={"Datum auswählen"}
                    label={"Datum auswählen"}
                    saveLabel={"Speichern"}
                    startWeekOnMonday={true}
                    visible={showWebModal}
                    onDismiss={onDismissSingle}
                    date={date}
                    onConfirm={onConfirmSingle}
                />

                <Button title="Absenden" onPress={handleSubmit}/>
            </View>
        </View>
    );
};
