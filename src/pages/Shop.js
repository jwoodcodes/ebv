import Link from "next/link";
import styles from "@/styles/Shop.module.css";
import MainNav from "./mainNav";
import Footer from "@/components/home/Footer";
import Image from "next/image";
import ItemCard from "@/components/shop/ItemCard";

export default function Shop() {
  return (
    <>
      <MainNav />

      <div className={styles.mainWrapper}>
        <ItemCard
          imageURL="/juice.webp"
          title="Elderberry Juice"
          price="$20.00"
          altText="Bottle of elderberry juice"
          width="175"
          height="250"
          gridIndex="1"
        />
      </div>

      <Footer />
    </>
  );
}
