import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

import Header from "./src/components/Header";

import { Provider as BlogProvider } from "./src/context/BlogContext";
const Stack = createStackNavigator();

export default App = () => {
    return (
        <BlogProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={({ route, navigation }) => {
                        return {
                            headerStyle: {
                                // backgroundColor: "red",
                            },
                            headerRight: () => {
                                return <Header route={route} navigation={navigation} />;
                            },
                        };
                    }}
                >
                    <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
                    <Stack.Screen name="Detail" component={DetailScreen}></Stack.Screen>
                    <Stack.Screen name="Edit" component={EditScreen}></Stack.Screen>
                    <Stack.Screen name="Create" component={CreateScreen}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </BlogProvider>
    );
};
