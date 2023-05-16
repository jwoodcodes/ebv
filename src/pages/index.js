import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import MainNav from "./mainNav";
import Banner from "@/components/home/Banner";
import MarketAndMessage from "@/components/home/MarketAndMessage";
import LowerBanner from "@/components/home/LowerBanner";
import Footer from "@/components/home/Footer";
import { Great_Vibes } from "@next/font/google";
import { CartProvider } from "use-shopping-cart";

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
        <CartProvider
          mode="payment"
          cartMode="client-only"
          // Connects to your Stripe account
          stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
          // Redirected here after successful payments
          successUrl={`${process.env.NEXT_PUBLIC_URL}/success`}
          // Redirected here when you click back on Stripe Checkout
          cancelUrl={`${process.env.NEXT_PUBLIC_URL}/?success=false`}
          currency="USD"
          // Only customers from UK will be able to purchase
          // Having this setting means that we will capture shipping address
          allowedCountries={["US"]}
          // Enables local storage
          shouldPersist={true}
        ></CartProvider>

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
        <CartProvider />
      </main>
    </>
  );
}
