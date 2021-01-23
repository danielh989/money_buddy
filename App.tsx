import React from "react";
import { StyleSheet } from "react-native";

import UserSummary from "./screens/UserSummary";

export default function App() {
  return <UserSummary></UserSummary>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
