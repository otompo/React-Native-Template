import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
const Tab = createBottomTabNavigator();

function Tabs(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="home-circle"
                size={45}
                style={{ marginBottom: 3, alignSelf: "center" }}
                color={focused ? "#186FB7" : "black"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile2"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="account-circle"
                size={45}
                style={{ marginBottom: 3, alignSelf: "center" }}
                color={focused ? "#186FB7" : "black"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings2"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="cog"
                size={45}
                style={{ marginBottom: 3, alignSelf: "center" }}
                color={focused ? "#186FB7" : "black"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;

const styles = StyleSheet.create({});
