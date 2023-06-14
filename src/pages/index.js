import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import MainNav from "@/components/MainNav";
import Banner from "@/components/home/Banner";
import MarketAndMessage from "@/components/home/MarketAndMessage";
import LowerBanner from "@/components/home/LowerBanner";
import Footer from "@/components/home/Footer";
import { Great_Vibes } from "@next/font/google";

const great_vibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>ElderBlossom View</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <MainNav />
        <div className={styles.aboveMainImage}>
          <div className={great_vibes.className}>
            <h1 className={styles.mainTitle}>ElderBlossom View</h1>
          </div>
        </div>
        <div className={styles.mainImgWrapper}>
          <Image
            src="/stage-with-crowd.webp"
            className={styles.mainImg}
            fill
            lazy="true"
            alt="Crowd enjoying band at winery"
          ></Image>
        </div>
        <Banner />
        <MarketAndMessage />
        <LowerBanner />
        <Footer />
      </main>
    </>
  );
}
