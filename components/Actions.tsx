import React, { FC } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ActionsProps } from "../types";
interface Props {
  actions: Array<ActionsProps>;
}
const Actions: FC<Props> = (props) => {
  return (
    <FlatList
      data={props.actions}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              color={colors.primary}
              size={20}
              name={item.icon}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
          <Text style={styles.ammount}>${item.ammount}</Text>
        </View>
      )}
    />
  );
};
const styles = StyleSheet.create({
  ammount: { fontWeight: "bold" },
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 20,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 3,
    marginVertical: 10,
    padding: 20,
    paddingVertical: 14,
  },
  icon: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 20,
    justifyContent: "center",
    height: 60,
    width: 60,
  },
  title: { color: colors.dark, fontSize: 14, fontWeight: "bold" },
  textContainer: { marginLeft: -35 },
  subtitle: { color: colors.secondary, fontSize: 12 },
});
export default Actions;
