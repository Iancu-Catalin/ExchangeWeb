import { Deposit } from "../../../shared/models/Deposit";
import React, { FC } from "react";

type Props = { deposit: Deposit[] };
const HomeDeposit: FC<Props> = ({ deposit }) => {
  console.log("Suntem aici " + deposit);
  return (
    <div>
      {deposit.map((element, i) => {
        return (
          <div key={i}>
            <h1>Amount: {element.amount}</h1>
            <h1>From Adress: {element.fromAdress}</h1>
          </div>
        );
      })}

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  //return <></>;
};

export default HomeDeposit;
