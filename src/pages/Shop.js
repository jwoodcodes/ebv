import React from "react";
import Link from "next/link";
import styles from "@/styles/Shop.module.css";
import MainNav from "@/components/MainNav";
import Footer from "@/components/home/Footer";
import ProductsPage from "@/components/shop/ProductsPage";
import EventsPage from "@/components/shop/EventsPage";

import clientPromise from "@/lib/mongodb";

export default function Shop({ products }) {
  const [productDisplay, setProductDisplay] = React.useState("true");
  // console.log(products);
  let itemsObject;

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
      {products.map((tempItem) => {
        itemsObject = tempItem.allShopData;
      })}
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
      <div>
        {productDisplay === "true" && (
          <ProductsPage itemsObject={itemsObject} />
        )}
        {productDisplay === "false" && <EventsPage itemsObject={itemsObject} />}
      </div>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db("shopData");

    const products = await db.collection("shopData").find({}).toArray();

    return {
      props: { products: JSON.parse(JSON.stringify(products)) },
    };
  } catch (e) {
    console.error(e);
    console.log("error in getStaticProps");
  }
}

// export default function Shop() {
//   const [productDisplay, setProductDisplay] = React.useState("true");

//   function TogglePageToProducts() {
//     if (productDisplay === "false") {
//       setProductDisplay("true");
//     }
//   }

//   function TogglePageToEvents() {
//     if (productDisplay === "true") {
//       setProductDisplay("false");
//     }
//   }

//   return (
// <>
//   <MainNav />
//   <div className={styles.shopTitle}>ElderBlossom View Shop</div>
//   <div className={styles.buttonWrapper}>
//     <button
//       className={styles.productsButton}
//       onClick={TogglePageToProducts}
//     >
//       Shop Products
//     </button>
//     <button className={styles.eventsButton} onClick={TogglePageToEvents}>
//       Shop Event Tickets
//     </button>
//   </div>
//   <div className={styles.gridWrapper}>
//     {productDisplay === "true" && <ProductsPage />}
//     {productDisplay === "false" && <EventsPage />}
//   </div>

//   <Footer />
// </>
//   );
// }
