import {View, Text, TextInput, Switch, Button, TouchableOpacity, Alert, Pressable, Platform} from "react-native";
import {useCallback, useState} from "react";
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import {DatePickerModal} from "react-native-paper-dates";
import {styles} from "../styles/styles";
import {SingleChange} from "react-native-paper-dates/lib/typescript/Date/Calendar";

export const Form = () => {
    const [checked, setChecked] = useState(false);
    const [date, setDate] = useState(new Date());
    const [showWebModal, setShowWebModal] = useState(false);
    const [showMobileModal, setShowMobileModal] = useState(false);

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date): void => {
        if (selectedDate) {
            setDate(selectedDate);
        }
        setShowWebModal(false);
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
    }

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
                />

                <Text>Checkbox:</Text>
                <Switch
                    value={checked}
                    onValueChange={() => setChecked(!checked)}
                    style={{marginBottom: 16}}
                />

                <Text>Datumsauswahl:</Text>
                <Text>{date.toLocaleDateString()}</Text>
                <Pressable
                    onPress={handleOpenDateTimePicker}
                    style={styles.button}
                >
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

                <Button title="Absenden" onPress={() => {
                    Alert.alert("Du hast auf den Button gedrückt!")
                }}/>
            </View>
        </View>
    );
};
