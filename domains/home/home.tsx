import { FC } from "react";
import styles from "../../styles/Home.module.css";
import { Deposit } from "../shared/models/Deposit";
import { TradeOrder } from "../shared/models/TradeOrder";
import { Withdrawal } from "../shared/models/Withdrawal";
import HomeDeposit from "./components/homeDeposit/homeDeposit";
import HomeWithdrawal from "./components/homeWithdrawal/homeWithdrawal";
import HomeTradeOrder from "./components/homeTradeOrder/homeTradeOrder";

type Props = {
  deposit: Deposit[];
  withdrawal: Withdrawal[];
  tradeOrder: TradeOrder[];
};

const Home: FC<Props> = ({ deposit, withdrawal, tradeOrder }) => {
  return (
    <div className={styles.container}>
      <main>
        <HomeDeposit deposit={deposit} />
        <HomeWithdrawal withdrawal={withdrawal} />
        <HomeTradeOrder tradeOrder={tradeOrder} />
      </main>
    </div>
  );
};

export default Home;
