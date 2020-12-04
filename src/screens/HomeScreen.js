import React, { useContext } from "react";
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Context as BlogContext } from "../context/BlogContext";
// import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    title: {
        margin: 20,
        position: "relative",
        justifyContent: "center",
    },
    t: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    create: {
        position: "absolute",
        right: 0,
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
    const { state, addPost, deletePost } = useContext(BlogContext);
    return (
        <View>
            <View style={styles.title}>
                <Text style={styles.t}>HomeScreen</Text>
                <TouchableOpacity style={styles.create} onPress={() => navigation.navigate("Create")}>
                    <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Button title="Add Post" onPress={addPost} />
            <FlatList
                keyExtractor={(item) => `${item.id}`}
                data={state}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("Detail", { id: item.id })} style={styles.row}>
                            <Text>
                                {item.title}#{item.id}
                            </Text>
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
