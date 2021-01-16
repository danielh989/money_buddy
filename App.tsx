import React from "react";
import { StyleSheet, View } from "react-native";

import MainCard from "./components/MainCard";
import { BalanceValues } from "./types";

export default function App() {
  const data: Array<BalanceValues> = [
    { title: "Income", value: 8900 },
    { title: "Expenses", value: 5500 },
    { title: "Loan", value: 890 },
  ];
  return (
    <View style={styles.container}>
      <MainCard balanceValues={data} />
    </View>
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
