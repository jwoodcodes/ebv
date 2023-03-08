import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import MainNav from "./mainNav";
import Banner from "@/components/home/Banner";
import MarketAndMessage from "@/components/home/MarketAndMessage";
import LowerBanner from "@/components/home/lowerBanner";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>ElderBlossom View</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Great+Vibes&family=Noto+Serif+JP:wght@200&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Great+Vibes&family=Noto+Serif+JP:wght@200&family=Playfair+Display&display=swap');
        </style>
      </Head>

      <main>
        <MainNav />
        <h1 className={styles.mainTitle}>ElderBlossom View</h1>
        <div className={styles.mainImgWrapper}>
          <Image
            src="/stage-with-crowd.webp"
            className={styles.mainImg}
            fill
            priority
            alt="crowd enjoying band at winery"
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
