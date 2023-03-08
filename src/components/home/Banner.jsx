import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerTextWrapper}>
        <div className={styles.bannerText}>
          We Produce Pure Elderberry Juice, Syrup, and Wine
        </div>
        <div>
          <Link href="/Shop" className={styles.bannerShopLink}>
            Shop our full line of products HERE{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
