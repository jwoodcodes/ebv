import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function MainNav() {
  return (
    <nav className={styles.mainNav}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/About">About</Link>
      </li>
      <li>
        <Link href="/Shop-Juices">Shop Juices</Link>
      </li>
      <li>
        <Link href="/Shop Wines">Shop Wines</Link>
      </li>
      <li>
        <Link href="/Events">Events</Link>
      </li>
    </nav>
  );
}
