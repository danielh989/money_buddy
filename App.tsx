import React from "react";
import { StyleSheet, View } from "react-native";

import MainCard from "./components/MainCard";
import { BalanceValues } from "./types";
import MainScreen from "./screens/MainScreen";

export default function App() {
  const data: Array<BalanceValues> = [
    { title: "Income", value: 8900 },
    { title: "Expenses", value: 5500 },
    { title: "Loan", value: 890 },
  ];
  return (
    <MainScreen>
      <MainCard balanceValues={data} />
    </MainScreen>
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
