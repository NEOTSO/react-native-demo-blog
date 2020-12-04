import React, { useState, useContext, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

import PostForm from "../components/PostForm";

const styles = StyleSheet.create({
    view: {
        padding: 20,
    },
});

export default EditScreen = ({ route, navigation }) => {
    const { state, editPost } = useContext(BlogContext);

    const { id } = route.params;
    const detail = state.find((item) => item.id === id);

    return (
        <PostForm
            initialState={detail}
            onSubmit={(post) => {
                editPost({ ...post, id }, () => {
                    navigation.pop();
                });
            }}
        />
    );
};
