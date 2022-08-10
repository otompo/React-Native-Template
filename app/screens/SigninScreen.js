import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
} from "react-native";
import LottieView from "lottie-react-native";
import SignUp from "../components/Auth/SignUp";
var { width } = Dimensions.get("window");

function SigninScreen(props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {/* <Image
        source={require("../assets/cover.png")}
        alt="image"
        style={styles.coverImage}
      /> */}
      <SignIn />
      {/* 
      <View>
        <LottieView
          source={require("../assets/cigarette-man.json")}
          autoPlay
          loop
          style={styles.loader}
        />
      </View> */}
    </ScrollView>
  );
}

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    // position: "relative",
  },

  coverImage: {
    width: width,
    resizeMode: "contain",
  },
  singinForm: {
    position: "absolute",
    bottom: 280,
    left: 10,
  },
});
