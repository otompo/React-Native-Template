import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, StatusBar, LogBox } from "react-native";
import Auth from "./app/navigation/Auth";
import Main from "./app/navigation/Main";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);

  LogBox.ignoreAllLogs(true);
  return (
    <>
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <NavigationContainer>
          <StatusBar backgroundColor="#186FB7" barStyle="light-content" />
          {isAuth ? <Main /> : <Auth />}
        </NavigationContainer>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
