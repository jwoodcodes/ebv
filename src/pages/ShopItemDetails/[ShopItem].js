import React from "react";
import { useRouter } from "next/router";

import Shop from "../Shop";
import ItemCard from "@/components/shop/ItemCard";
import clientPromise from "@/lib/mongodb";
import ItemDetailsPage from "@/components/shop/ItemDetailsPage";

const ShopItem = ({ products }) => {
  const router = useRouter();
  const { pid } = router.query;
  const [state, setState] = React.useState(false);

  React.useEffect(() => {
    setState(router.isReady);
    // console.log(router.query.ShopItem);]
  }, [router.isReady]);

  if (state === true) {
    products.map((item) => {
      //   console.log(item);
    });
  }

  return (
    <>
      {state === true ? (
        <ItemDetailsPage itemName={router.query.ShopItem} data={products} />
      ) : (
        "Router is not ready"
      )}
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      "/ShopItemDetails/Elderberry%20Juice",
      "/ShopItemDetails/Elderflower%20Nectar",
      "/ShopItemDetails/Elderberry%20Relief",
      "/ShopItemDetails/Elderberry%20Relief%20With%20Ginger",
      "/ShopItemDetails/Elderberry%20Wine%20Vinegar",
      "/ShopItemDetails/Dry%20Elderberry%20Wine",
      "/ShopItemDetails/Semi-Dry%20Elderberry%20Wine",
      "/ShopItemDetails/Semi-Sweet%20Elderberry%20Wine",
      "/ShopItemDetails/Sweet%20Elderberry%20Wine",
      "/ShopItemDetails/The%20Bel%20Airs",
      "/ShopItemDetails/Mick%20Byrd%20and%20the%20Backroad%20Band",
      "/ShopItemDetails/Hart%20Creek%20Ramblers",
      "/ShopItemDetails/Apostle's%20Creek%20Band",
    ],
    fallback: false,
  };
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
  }
}

export default ShopItem;
