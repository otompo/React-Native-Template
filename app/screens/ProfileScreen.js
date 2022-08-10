import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Header from "../components/Header";

function ProfileScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} />
      <Text>Profile Screen</Text>
    </ScrollView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({});
