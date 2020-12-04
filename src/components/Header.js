import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const styles = StyleSheet.create({
    icon: {
        marginRight: 20,
    },
});

export default Header = ({ route, navigation }) => {
    switch (route.name) {
        case "Home":
            return (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                    <AntDesign style={styles.icon} name="plus" size={24} color="black" />
                </TouchableOpacity>
            );
        case "Detail":
            const { id } = route.params;
            return (
                <TouchableOpacity onPress={() => navigation.navigate("Edit", { id })}>
                    <AntDesign style={styles.icon} name="edit" size={24} color="black" />
                </TouchableOpacity>
            );
        default:
            return null;
    }
};
