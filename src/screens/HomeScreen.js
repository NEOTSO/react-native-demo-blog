import React, { useEffect, useContext, useCallback } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import { Context as BlogContext } from "../context/BlogContext";

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    content: {
        fontSize: 18,
    },
    row: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderColor: "grey",
    },
});

export default HomeScreen = ({ navigation }) => {
    const { state, initPosts, deletePost } = useContext(BlogContext);

    // useEffect(() => {
    //     initPosts();
    // }, []);

    useFocusEffect(
        useCallback(() => {
            // Do something when the screen is focused
            initPosts();
            return () => {
                // Do something when the screen is unfocused
                // Useful for cleanup functions
            };
        }, [])
    );

    return (
        <View>
            <FlatList
                keyExtractor={(item) => `${item.id}`}
                data={state}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("Detail", { id: item.id })} style={styles.row}>
                            <View>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.content}>{item.content}</Text>
                            </View>
                            <TouchableOpacity onPress={() => deletePost(item.id)}>
                                <AntDesign name="delete" size={24} color="black" />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    );
                }}
            ></FlatList>
        </View>
    );
};
