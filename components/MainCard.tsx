import React, { FC } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { BalanceValues } from "../types";
import UserBalance from "./UserBalance";
import params from "../config/params";

interface Props {
  balanceValues: Array<BalanceValues>;
}

const MainCard: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardMenu}>
        <MaterialCommunityIcons
          size={params.MENU_ICON_SIZE}
          color={colors.primary}
          name="menu"
        />
        <MaterialCommunityIcons
          size={params.MENU_ICON_SIZE}
          color={colors.primary}
          name="dots-vertical"
        />
      </View>
      <View style={styles.userInfo}>
        <Image
          style={styles.userImage}
          source={require("../assets/user.png")}
        />
        <Text style={styles.userName}>Hira Riaz</Text>
        <Text style={styles.occupation}>UX/UI Designer</Text>
      </View>
      <UserBalance balanceValues={props.balanceValues} />
    </View>
  );
};
const styles = StyleSheet.create({
  cardMenu: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  container: {
    backgroundColor: colors.light,
    borderRadius: 20,
    padding: 20,
    width: "100%",
  },
  occupation: {
    color: colors.dark,
  },
  userBalance: {
    justifyContent: "center",
  },
  userInfo: {
    marginVertical: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  userName: {
    color: colors.primary,
    fontSize: params.USER_TITLE_SIZE,
  },
  userImage: {
    borderRadius: 100,
    height: 100,
    width: 100,
    marginBottom: 20,
  },
});
export default MainCard;
