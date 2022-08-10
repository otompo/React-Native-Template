import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Header from "../components/Header";

function HomeScreen({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Header navigation={navigation} />
      <Text>Home Screen</Text>
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({});
