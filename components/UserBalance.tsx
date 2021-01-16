import React, { FC } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import colors from "../config/colors";
import { BalanceValues } from "../types";

interface Props {
  balanceValues: Array<BalanceValues>;
}

const UserBalance: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.balanceValues}
        numColumns={3}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.balanceItem}>
            <Text style={styles.value}>{item.value}</Text>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  balanceItem: { alignItems: "center", justifyContent: "center" },
  container: { padding: 10 },
  value: { color: colors.primary, fontSize: 14 },
  title: { color: colors.dark },
});
export default UserBalance;
