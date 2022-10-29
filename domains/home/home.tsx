import { FC } from "react";
import styles from "./home.module.scss";
import { Deposit } from "../shared/models/Deposit";
import HomeDeposit from "./components/homeDeposit/homeDeposit";

type Props = { deposit: Deposit[] };
const Home: FC<Props> = ({ deposit }) => {
  return (
    <div className={styles.container}>
      <main>
        <HomeDeposit deposit={deposit} />
      </main>
    </div>
  );
};

export default Home;
