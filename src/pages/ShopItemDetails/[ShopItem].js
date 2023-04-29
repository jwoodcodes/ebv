import React from "react";
import { useRouter } from "next/router";

import Shop from "../Shop";
import ItemCard from "@/components/shop/ItemCard";
import clientPromise from "@/lib/mongodb";

const ShopItem = ({ products }) => {
  const router = useRouter();
  const { pid } = router.query;
  const [state, setState] = React.useState(false);

  React.useEffect(() => {
    setState(router.isReady);
    // console.log(router.query.ShopItem);
  }, [router.isReady]);

  if (state === true) {
    products.map((item) => {
      console.log(item);
    });
  }

  return (
    <p>
      {state === true
        ? `Router is ready ${router.query.ShopItem}`
        : "Router is not ready"}
    </p>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      "/ShopItemDetails/Elderberry%20Juice",
      // Object variant:
      //   { params: { slug: "second-post" } },
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
