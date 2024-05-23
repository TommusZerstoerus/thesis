import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 100,
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: '#348F50',
        padding: 20,
        borderRadius: 10,
        margin: 10,
    },
    listContainer: {},
    itemContainer: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 16,
    },
    imageContainer: {
        borderRadius: 8,
        marginBottom: 16,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 8,
    },
    errorText: {
        color: "red",
        marginTop: 16,
    },
});