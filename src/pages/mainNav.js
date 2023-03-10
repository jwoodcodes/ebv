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
        <Link href="/Shop">Shop</Link>
      </li>

      <li>
        <Link href="/Events">Events</Link>
      </li>
      <li>
        <Link href="/Contact">Contact</Link>
      </li>
      <li>
        <Link href="/Venue">Venue</Link>
      </li>
      <div className={styles.SignInAndCart}>
        <li>
          <button className={styles.loginButton}>Login</button>
        </li>
        <li>
          <Link href="/cart" className={styles.cart}>
            Cart
          </Link>
        </li>
      </div>
    </nav>
  );
}
