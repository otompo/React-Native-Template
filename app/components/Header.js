import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
var { width } = Dimensions.get("window");

function Header({ navigation }) {
  return (
    <SafeAreaView style={styles.headerMain}>
      <View style={styles.headerInner}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: "#fff" }}>Header</Text>
      </View>
    </SafeAreaView>
  );
}

export default Header;

const styles = StyleSheet.create({
  headerMain: {
    width: width,
    height: width / 4 - 35,
    backgroundColor: "#186FB7",
    elevation: 8,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  headerInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
  },
});
