import React, { FC } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

interface Props {}
const MainScreen: FC<Props> = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};
const styles = StyleSheet.create({
  container: { marginTop: Constants.statusBarHeight, padding: 30 },
});
export default MainScreen;
