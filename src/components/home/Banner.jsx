import styles from "@/styles/Home.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        We Produce Pure Elderberry Juice,
        <br /> <span className={styles.bannerSpan}> Syrup, and Wine</span>
      </div>
    </div>
  );
}
