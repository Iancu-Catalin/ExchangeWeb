import { Deposit } from "../../../shared/models/Deposit";
import React, { FC } from "react";

type Props = { deposit: Deposit[] };
const Deposit: FC<Props> = ({ deposit }) => {
  console.log(deposit);
  return (
    <div>
      {deposit.map((element) => {
        return (
          <>
            <div>
              <h1>Amount: {element.amount}</h1>
              <h2>From Adress: {element.fromAdress}</h2>
            </div>
          </>
        );
      })}
    </div>
  );
  //return <></>;
};

export default Deposit;
