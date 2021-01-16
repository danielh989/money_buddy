import React, { FC } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { BalanceValues } from "../types";
import UserBalance from "./UserBalance";

interface Props {
  balanceValues: Array<BalanceValues>;
}

const MainCard: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardMenu}>
        <MaterialCommunityIcons color={colors.primary} name="hamburger" />
        <MaterialCommunityIcons color={colors.primary} name="menu" />
      </View>
      <View style={styles.userInfo}>
        <Image
          style={styles.userImage}
          source={{ uri: "../assets/user.png" }}
        />
        <Text style={styles.userName}>UserName</Text>
        <Text style={styles.occupation}>Occupation</Text>
      </View>
      <UserBalance balanceValues={props.balanceValues} />
    </View>
  );
};
const styles = StyleSheet.create({
  cardMenu: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    width: "100%",
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.white,
  },
  occupation: {
    color: colors.dark,
  },
  userInfo: {
    alignItems: "center",
    justifyContent: "center",
  },
  userName: {
    fontSize: 14,
    color: colors.primary,
  },
  userImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
export default MainCard;
