import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import MainNav from "./mainNav";
import stage from "public/images/stage-with-crowd.webp";

export default function Home() {
  return (
    <>
      <Head>
        <title>ElderBlossom View</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Great+Vibes&family=Noto+Serif+JP:wght@200&display=swap');
        </style>
      </Head>

      <main>
        <MainNav />
        <h1 className={styles.mainTitle}>ElderBlossom View</h1>
        <div className={styles.mainImgWrapper}>
          <Image
            src={stage}
            className={styles.mainImg}
            fill
            alt="crowd enjoying band at winery"
          ></Image>
        </div>
      </main>
    </>
  );
}
