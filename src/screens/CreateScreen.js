import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

import PostForm from "../components/PostForm";

const styles = StyleSheet.create({});

export default CreateScreen = ({ navigation }) => {
    const { addPost } = useContext(BlogContext);

    return (
        <PostForm
            onSubmit={(post) => {
                addPost(post, () => {
                    navigation.navigate("Home");
                });
            }}
        />
    );
};
