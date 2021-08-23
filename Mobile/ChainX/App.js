import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/routes/stack";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";

/**
 * Main component of the application
 * @return @APP
 */
export default function App() {
  return (
    <Provider store={Store}>
      <Navigator />
    </Provider>
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
