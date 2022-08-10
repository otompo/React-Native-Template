import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerItems from "../components/Layout/DrawerItems";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import Tabs from "./Tabs";

function Main(props) {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#186FB7",
        drawerActiveTintColor: "#fff",
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
          marginVertical: 2,
        },
      }}
      drawerContent={(props) => <DrawerItems {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Tabs}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home"
              size={25}
              style={{ marginBottom: 3, alignSelf: "center" }}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account"
              size={25}
              style={{ marginBottom: 3, alignSelf: "center" }}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default Main;

const styles = StyleSheet.create({});
