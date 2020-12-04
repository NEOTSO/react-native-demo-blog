import React, { useContext } from "react";
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const styles = StyleSheet.create({
    row: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderColor: "grey",
    },
});

export default CreateScreen = () => {
    // const { state } = useContext(BlogContext);

    return (
        <View>
            <Text>CreateScreen</Text>
        </View>
    );
};
