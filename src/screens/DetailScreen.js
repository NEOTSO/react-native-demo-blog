import React, { useState, useCallback } from "react";
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import jsonServer from "../api/jsonServer";

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
    const [post, setPost] = useState(null);
    const initPost = async (id) => {
        const { data } = await jsonServer.get(`/posts/${id}`);
        console.log("***");
        console.log(id);
        console.log(data);
        setPost(data);
    };

    useFocusEffect(
        useCallback(() => {
            const { id } = route.params;
            initPost(id);
            return () => {
                // Do something when the screen is unfocused
                // Useful for cleanup functions
            };
        }, [])
    );

    return (
        <View>
            <Text>{post && post.title}</Text>
            <Text>{post && post.content}</Text>
        </View>
    );
};
