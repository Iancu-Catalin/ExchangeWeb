import { FC, useState } from "react";
import styles from "../../styles/Home.module.css";
import { Deposit } from "../shared/models/Deposit";
import { TradeOrder } from "../shared/models/TradeOrder";
import { Withdrawal } from "../shared/models/Withdrawal";
import HomeDeposit from "./components/homeDeposit/homeDeposit";
import HomeWithdrawal from "./components/homeWithdrawal/homeWithdrawal";
import HomeTradeOrder from "./components/homeTradeOrder/homeTradeOrder";
import "bootstrap/dist/css/bootstrap.css";

type Props = {
  deposit: Deposit[];
  withdrawal: Withdrawal[];
  tradeOrder: TradeOrder[];
};

const Home: FC<Props> = ({ deposit, withdrawal, tradeOrder }) => {
  const [selectedOption, setSelectedOption] = useState("1");
  return (
    <div className={styles.container}>
      <main className="main-container">
        <div className="input-group mb-3">
          <select
            onChange={(event) => setSelectedOption(event.target.value)}
            className="custom-select"
            id="inputGroupSelect02"
          >
            <option value="1">Deposits</option>
            <option value="2">Trade Orders</option>
            <option value="3">Withdrawals</option>
          </select>
        </div>
        {selectedOption === "1" && <HomeDeposit deposit={deposit} />}
        {selectedOption === "2" && <HomeWithdrawal withdrawal={withdrawal} />}
        {selectedOption === "3" && <HomeTradeOrder tradeOrder={tradeOrder} />}
      </main>
    </div>
  );
};

export default Home;
