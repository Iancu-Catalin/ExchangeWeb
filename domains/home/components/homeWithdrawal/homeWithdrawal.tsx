import { Withdrawal } from "../../../shared/models/Withdrawal";
import React, { FC } from "react";

type Props = { withdrawal: Withdrawal[] };
const HomeWithdrawal: FC<Props> = ({ withdrawal }) => {
  console.log("Suntem aici " + withdrawal);
  return (
    <div>
      {withdrawal?.map((element, i) => {
        return (
          <div key={i}>
            <h1>Amount: {element.amount}</h1>
            <h1>To Adress: {element.toAdress}</h1>
            <h1>2FA Confirmed: {element.wasApprovedByUser2fA}</h1>
          </div>
        );
      })}
    </div>
  );
  //return <></>;
};

export default HomeWithdrawal;
