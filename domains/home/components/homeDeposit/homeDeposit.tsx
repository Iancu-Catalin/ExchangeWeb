import { Deposit } from "../../../shared/models/Deposit";
import React, { FC } from "react";

type Props = { deposit: Deposit[] };
const HomeDeposit: FC<Props> = ({ deposit }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Amount</th>
            <th scope="col">From Adress</th>
          </tr>
        </thead>
        <tbody>
          {deposit.map((element, i) => {
            return (
              <tr key={i}>
                <td>{element.amount}</td>
                <td>{element.fromAdress}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HomeDeposit;
