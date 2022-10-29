import { TradeOrder } from "../../../shared/models/TradeOrder";
import React, { FC } from "react";

type Props = { tradeOrder: TradeOrder[] };
const HomeTradeOrder: FC<Props> = ({ tradeOrder }) => {
  console.log("Suntem aici " + tradeOrder);
  return (
    <div>
      {tradeOrder?.map((element, i) => {
        return (
          <div key={i}>
            <h1>Amount: {element.amount}</h1>
            <h1>Trade Order Type: {element.tradeOrderType}</h1>
          </div>
        );
      })}
    </div>
  );
  //return <></>;
};

export default HomeTradeOrder;
