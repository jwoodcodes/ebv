import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function MarketAndMessage() {
  return (
    <div className={styles.marketandMessageWrapper}>
      <Link href="https://columbiafarmersmarket.org/" className={styles.market}>
        <Image src="/farmers-market-logo" width={350} height={325}></Image>
      </Link>
      <div className={styles.marketMessage}>
        Join us at the Columbia Farmers Market!
      </div>
    </div>
  );
}
