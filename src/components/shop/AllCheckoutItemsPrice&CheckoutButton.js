import styles from "@/styles/cart.module.css";

export default function AllCheckoutItemsPriceAndCheckoutButton({ data }) {
  let newData;
  let itemTotalPrice;
  let totalCheckoutPrice = 0;
  let formattedTotalCheckoutPrice;

  return (
    <>
      {data.map((data) => {
        newData = {
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
        console.log(typeof itemTotalPrice);
        totalCheckoutPrice = totalCheckoutPrice + itemTotalPrice;
        formattedTotalCheckoutPrice = `$${totalCheckoutPrice}.00`;
      })}

      <div className={styles.checkoutButtonAndTotalPriceWrapper}>
        <button
          className={styles.checkoutButton}
        >{`Checkout - ${formattedTotalCheckoutPrice}`}</button>
      </div>
    </>
  );
}
