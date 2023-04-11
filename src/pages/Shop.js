import React from "react";
import Link from "next/link";
import styles from "@/styles/Shop.module.css";
import MainNav from "./mainNav";
import Footer from "@/components/home/Footer";
import ProductsPage from "@/components/shop/ProductsPage";
import EventsPage from "@/components/shop/EventsPage";
import ShopDataFromDb from "@/components/shop/fetchData";

export default function Shop() {
  const [productDisplay, setProductDisplay] = React.useState("true");

  function TogglePageToProducts() {
    if (productDisplay === "false") {
      setProductDisplay("true");
    }
  }

  function TogglePageToEvents() {
    if (productDisplay === "true") {
      setProductDisplay("false");
    }
  }

  return (
    <>
      <MainNav />
      <div className={styles.shopTitle}>ElderBlossom View Shop</div>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.productsButton}
          onClick={TogglePageToProducts}
        >
          Shop Products
        </button>
        <button className={styles.eventsButton} onClick={TogglePageToEvents}>
          Shop Event Tickets
        </button>
      </div>
      <div className={styles.gridWrapper}>
        {productDisplay === "true" && <ProductsPage />}
        {productDisplay === "false" && <EventsPage />}
      </div>

      <Footer />
    </>
  );
}
