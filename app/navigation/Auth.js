import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, StyleSheet, Text } from "react-native";
import SigninScreen from "../screens/SigninScreen";
import SignUpScreen from "../screens/SignUpScreen";

function Auth(props) {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SigninScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default Auth;

const styles = StyleSheet.create({});
