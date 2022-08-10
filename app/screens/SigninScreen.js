import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import LottieView from "lottie-react-native";

function SigninScreen(props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <View>
        <LottieView
          source={require("../assets/cigarette-man.json")}
          autoPlay
          loop
          style={styles.loader}
        />
      </View>
    </ScrollView>
  );
}

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  loader: {
    width: 350,
    height: 350,
  },
});
