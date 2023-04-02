import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Image
        src="/ebvLogo.jfif"
        className={styles.headerLogo}
        width={100}
        height={100}
        alt="ElderBlossom View Logo"
      ></Image>
      <div className={styles.copyWrapper}>
        <span className={styles.footerCopy}>&copy;</span>
        <span>2023</span>
      </div>
      <div className={styles.socialWrapper}>
        <Link href="https://www.facebook.com/elderblossomview/">
          <Image
            src="/facebook.png"
            width={50}
            height={50}
            alt="facebook link"
          ></Image>
        </Link>
        <Link href="https://www.instagram.com/elderblossomview/">
          <Image
            src="/instagramLogo.png"
            width={60}
            height={60}
            alt="instagram link"
          ></Image>
        </Link>
      </div>
    </div>
  );
}
