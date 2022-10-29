import { Deposit } from "../domains/shared/models/Deposit";
import { Withdrawal } from "../domains/shared/models/Withdrawal";
import { TradeOrder } from "../domains/shared/models/TradeOrder";
import { GetServerSideProps } from "next";
import React, { FC } from "react";
import Home from "../domains/home/home";

//type Props = { depositData: Deposit[] };

type Props = {
  depositData: Deposit[];
  withdrawalData: Withdrawal[];
  tradeOrderData: TradeOrder[];
};

const HomePage: FC<Props> = ({
  depositData,
  withdrawalData,
  tradeOrderData,
}) => {
  return (
    <Home
      deposit={depositData}
      tradeOrder={tradeOrderData}
      withdrawal={withdrawalData}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const [depositsRes, withdrawalsRes, tradeOrdersRes] = await Promise.all([
    fetch("http://localhost:3000/api/deposit"),
    fetch("http://localhost:3000/api/withdrawal"),
    fetch("http://localhost:3000/api/trade-order"),
  ]);
  const [deposits, withdrawals, tradeOrders] = await Promise.all([
    depositsRes.json(),
    withdrawalsRes.json(),
    tradeOrdersRes.json(),
  ]);
  console.log(deposits);
  console.log(withdrawals);
  console.log(tradeOrders);

  return {
    props: {
      depositData: deposits,
      withdrawalData: withdrawals,
      tradeOrderData: tradeOrders,
    },
  };
};

export default HomePage;
