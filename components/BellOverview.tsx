import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
interface Props {}
const BellOverview: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.overviewContainer}>
        <Text style={styles.overviewText}>Overview</Text>
        <MaterialCommunityIcons
          color={colors.primary}
          style={styles.bellIcon}
          size={25}
          name="bell-ring-outline"
        />
      </View>
      <Text style={styles.date}>Sep 13, 2020</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  bellIcon: {
    marginLeft: 12,
  },
  overviewContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: { color: colors.primary },
  container: {
    alignItems: "center",
    marginVertical: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  overviewText: {
    fontSize: 22,
    color: colors.primary,
  },
});
export default BellOverview;
