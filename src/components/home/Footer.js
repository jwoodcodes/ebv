import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Image
        src="/ebvLogo.jfif"
        className={styles.footerLogo}
        width={100}
        height={100}
      ></Image>
      <div>&copy;2023</div>
      <div className={styles.socialWrapper}>
        <Link href="https://www.facebook.com/elderblossomview/">
          <Image src="/facebook.png" width={50} height={50}></Image>
        </Link>
        <Link href="https://www.instagram.com/elderblossomview/">
          <Image src="/instagramLogo.png" width={60} height={60}></Image>
        </Link>
      </div>
    </div>
  );
}
