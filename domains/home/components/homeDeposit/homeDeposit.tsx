import { Deposit } from "../../../shared/models/Deposit";
import React, { FC } from "react";

type Props = { deposit: Deposit[] };
const HomeDeposit: FC<Props> = ({ deposit }) => {
  console.log("Suntem aici " + deposit);
  return (
    <div>
      {deposit?.map((element, i) => {
        return (
          <div key={i}>
            <h1>Amount: {element.amount}</h1>
            <h1>From Adress: {element.fromAdress}</h1>
          </div>
        );
      })}
    </div>
  );
  //return <></>;
};

export default HomeDeposit;
