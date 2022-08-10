import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import Header from "../components/Header";

function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Text>Settings Screen</Text>
    </SafeAreaView>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({});
