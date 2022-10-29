import { TradeOrder } from "../../../shared/models/TradeOrder";
import React, { FC } from "react";

type Props = { tradeOrder: TradeOrder[] };
const HomeTradeOrder: FC<Props> = ({ tradeOrder }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Amount</th>
            <th scope="col">Trade Order Type</th>
          </tr>
        </thead>
        <tbody>
          {tradeOrder.map((element, i) => {
            return (
              <tr key={i}>
                <td>{element.amount}</td>
                <td>{element.tradeOrderType}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HomeTradeOrder;
