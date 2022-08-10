import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import LottieView from "lottie-react-native";
var { width } = Dimensions.get("window");
import Icon from "react-native-vector-icons/Ionicons";

function SignIn(props) {
  return (
    <View style={styles.container}>
      <View style={styles.LoginBox}>
        <Image
          source={require("../../assets/cover.png")}
          alt="image"
          style={styles.coverImage}
        />
        <View>
          <LottieView
            source={require("../../assets/cigarette-man.json")}
            autoPlay
            loop
            style={styles.animate}
          />
        </View>
        <View style={styles.relative}>
          <Icon name="mail-open-outline" size={25} style={styles.icon} />
          <TextInput
            placeholder="Enter email.."
            placeholderTextColor="#333"
            style={styles.inputBox}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.relative}>
          <Icon name="lock-closed-outline" size={25} style={styles.icon} />
          <TextInput
            placeholder="Enter email.."
            placeholderTextColor="#333"
            style={styles.inputBox}
            textContentType="password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.relative}>
          <TouchableOpacity>
            <View style={styles.Button}>
              <Text style={{ color: "#fff", fontSize: 18 }}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  LoginBox: {
    marginTop: width / 2,
  },
  inputBox: {
    width: width * 1 - 80,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#3BB77E",
    padding: 10,
    paddingLeft: 45,
    fontSize: 15,
    color: "#333",
    marginVertical: 10,
  },
  relative: {
    position: "relative",
    bottom: 500,
    left: 20,
  },
  icon: {
    position: "absolute",
    top: 20,
    left: 10,
    zIndex: 10,
    color: "#FB578E",
  },
  Button: {
    width: width * 1 - 80,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#3BB77E",
    alignItems: "center",
    justifyContent: "center",
  },
  animate: {
    width: 350,
    height: 350,
    position: "absolute",
    bottom: 240,
  },
  coverImage: {
    width: width,
    resizeMode: "contain",
  },
});
