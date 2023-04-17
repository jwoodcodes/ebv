import styles from "@/styles/Shop.module.css";
import Image from "next/image";
import ItemCard from "@/components/shop/ItemCard";
import Shop from "@/pages/Shop";

function ProductsPage({ itemsObject }) {
  // console.log(itemsObject);

  return (
    <ul className={styles.gridWrapper}>
      {itemsObject.map((item, index) => {
        console.log(item.alttext);
        return (
          <ItemCard
            key={index}
            imageURL={item.imgsrc}
            title={item.title}
            price={item.price}
            alttext={item.alttext}
            width={item.imgWidth}
            height={item.imgHeight}
          />
        );
      })}
    </ul>
  );
}

export default ProductsPage;

{
  /* <ItemCard
        imageURL="/juice.webp"
        title="Elderberry Juice"
        price="$20.00"
        alttext="Bottle of elderberry juice"
        width="360"
        height="440"
      />
      <ItemCard
        imageURL="/elderflower-necter.webp"
        title="Elderflower Necter"
        price="$20.00"
        alttext="Bottle of elderflower necter"
        width="360"
        height="440"
      />
      <ItemCard
        imageURL="/relief.webp"
        title="Elderberry relief"
        price="$20.00"
        alttext="Bottle of elderflower relief"
        width="360"
        height="440"
      />
      <ItemCard
        imageURL="/elderberry-wine-vinegar.webp"
        title="Elderberry Wine Vinegar"
        price="$20.00"
        alttext="Bottle of elderberry Wine Vinegar"
        width="360"
        height="440"
      />{" "}
      */
}
