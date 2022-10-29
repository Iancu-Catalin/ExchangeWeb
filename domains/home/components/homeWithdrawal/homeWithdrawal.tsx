import { Withdrawal } from "../../../shared/models/Withdrawal";
import React, { FC } from "react";

type Props = { withdrawal: Withdrawal[] };
const HomeWithdrawal: FC<Props> = ({ withdrawal }) => {
  console.log("Suntem aici " + withdrawal);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Amount</th>
            <th scope="col">To Adress</th>
            <th scope="col">2FA Confirmed</th>
          </tr>
        </thead>
        <tbody>
          {withdrawal.map((element, i) => {
            return (
              <tr key={i}>
                <td>{element.amount}</td>
                <td>{element.toAdress}</td>
                <td>{element.wasApprovedByUser2fA.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HomeWithdrawal;
