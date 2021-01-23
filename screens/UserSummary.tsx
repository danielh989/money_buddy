import React, { FC } from "react";
import { StyleSheet } from "react-native";
import MainCard from "../components/MainCard";
import Screen from "../components/Screen";
import { BalanceValues } from "../types";
import BellOverview from "../components/BellOverview";
interface Props {}
const UserSummary: FC<Props> = (props) => {
  const data: Array<BalanceValues> = [
    { title: "Income", value: 8900 },
    { title: "Expenses", value: 5500 },
    { title: "Loan", value: 890 },
  ];
  return (
    <Screen>
      <MainCard balanceValues={data} />
      <BellOverview></BellOverview>
    </Screen>
  );
};
const styles = StyleSheet.create({});
export default UserSummary;
