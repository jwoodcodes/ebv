import React from "react";
import styles from "@/styles/cart.module.css";
import clsx from "clsx";

export default function AllCheckoutItemsPriceAndCheckoutButton({ data }) {
  const [modolState, setModolState] = React.useState("hidden");

  let newData;
  let itemTotalPrice;
  let totalCheckoutPrice = 0;
  let formattedTotalCheckoutPrice;

  const modolref = React.useRef();

  function openCheckoutModol(event) {
    // console.log(event.target);
    if (modolState === "hidden") {
      setModolState("visable");
    }
    if (modolState === "visable") {
      setModolState("hidden");
    }
  }

  function closeModol() {
    setModolState("hidden");
  }

  return (
    <>
      {data.map((data) => {
        newData = {
          key: data.id,
          id: data.id,
          actualPrice: data.data.actualPrice,
          alttext: data.data.alttext,
          description: data.data.description,
          imgsrc: data.data.imgsrc,
          title: data.data.title,
          type: data.data.type,
          quantity: data.quantity,
        };

        itemTotalPrice = +newData.actualPrice.slice(1) * newData.quantity;
        // console.log(typeof itemTotalPrice);
        totalCheckoutPrice = totalCheckoutPrice + itemTotalPrice;
        formattedTotalCheckoutPrice = `$${totalCheckoutPrice}.00`;
      })}

      <div
        className={clsx({
          [styles.hidden]: modolState === "hidden",
          [styles.visable]: modolState === "visable",
        })}
        ref={modolref}
      >
        <button className={styles.modolCloseButton} onClick={closeModol}>
          close
        </button>
        <div className={styles.modolText}>
          Thank you for viewing my project! This is a portfolio project only and
          no actual products may be purchased or money charged.
        </div>
      </div>
      <div className={styles.checkoutButtonAndTotalPriceWrapper}>
        <button
          className={styles.checkoutButton}
          onClick={openCheckoutModol}
        >{`Checkout - ${formattedTotalCheckoutPrice}`}</button>
      </div>
    </>
  );
}
