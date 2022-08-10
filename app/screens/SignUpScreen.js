import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

function SignUpScreen(props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <Text>SignUp Screen</Text>
    </ScrollView>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
