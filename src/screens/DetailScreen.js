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

export default DetailScreen = ({ route }) => {
    const { state } = useContext(BlogContext);
    const { id } = route.params;
    const detail = state.find((item) => item.id === id);

    return (
        <View>
            <Text>{detail.title}</Text>
            <Text>{detail.content}</Text>
        </View>
    );
};
