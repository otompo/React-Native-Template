import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";

export default function DrawerItems(props) {
  return (
    <View
      style={{
        flex: 1,
        // paddingVertical: 20,
        margin: 0,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          margin: 0,
          backgroundColor: "#535353",
          padding: 10,
        }}
      >
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2022/08/04/00/51/woman-7363571_960_720.jpg",
          }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 120,
            marginLeft: 10,
            borderWidth: 1,
            borderColor: "#fff",
          }}
        />

        <View>
          <Text style={{ color: "#fff", fontSize: 16, paddingLeft: 10 }}>
            Sasco
          </Text>
          <Text style={{ color: "#fff", fontSize: 16, paddingLeft: 10 }}>
            sasco@gmail.com
          </Text>
          <Text style={{ color: "#fff", fontSize: 16, paddingLeft: 10 }}>
            JoinDate
          </Text>
        </View>
      </View>

      <DrawerContentScrollView {...props}>
        <View
          style={{
            paddingTop: 10,
          }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 20,
            marginBottom: 20,
          }}
          // onPress={logOut}
        >
          <Icon name="log-out-outline" size={30} color="#333" />
          <Text style={{ color: "#333", fontSize: 16, paddingLeft: 10 }}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
