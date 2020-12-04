import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    view: {
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "grey",
        padding: 10,
        marginVertical: 10,
    },
});

const PostForm = ({ initialState, onSubmit }) => {
    const [title, setTitle] = useState(initialState.title);
    const [content, setContent] = useState(initialState.content);

    return (
        <View style={styles.view}>
            <Text>Enter Title:</Text>
            <TextInput style={styles.input} placeholder="Title" autoCapitalize="none" autoCorrect={false} value={title} onChangeText={(value) => setTitle(value)} />
            <Text>Enter Content:</Text>
            <TextInput style={styles.input} placeholder="Content" autoCapitalize="none" autoCorrect={false} value={content} onChangeText={(value) => setContent(value)} />
            <Button title="Save Post" onPress={() => onSubmit({ title, content })} />
        </View>
    );
};

PostForm.defaultProps = {
    initialState: {
        title: "",
        content: "",
    },
};

export default PostForm;
