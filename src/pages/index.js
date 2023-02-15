import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import MainNav from "./home-components/mainNav";

export default function Home() {
  return (
    <>
      <Head>
        <title>ElderBlossom View</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainNav></MainNav>
      <main>
        <h1 className={styles.mainTitle}>ElderBlossom View</h1>
      </main>
    </>
  );
}
