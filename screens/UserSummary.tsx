import React, { FC } from "react";
import { StyleSheet, FlatList } from "react-native";
import MainCard from "../components/MainCard";
import Screen from "../components/Screen";
import { ActionsProps, BalanceValues } from "../types";
import BellOverview from "../components/BellOverview";
import Actions from "../components/Actions";
interface Props {}
const UserSummary: FC<Props> = (props) => {
  const data: Array<BalanceValues> = [
    { title: "Income", value: 8900 },
    { title: "Expenses", value: 5500 },
    { title: "Loan", value: 890 },
  ];

  const actions: Array<ActionsProps> = [
    {
      title: "Sent",
      subtitle: "Sending Payments to Clients",
      ammount: 250,
      icon: "arrow-up",
    },
  ];
  return (
    <Screen>
      <MainCard balanceValues={data} />
      <BellOverview />
      <Actions actions={actions} />
    </Screen>
  );
};
const styles = StyleSheet.create({});
export default UserSummary;
