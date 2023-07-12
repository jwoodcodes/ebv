import styles from "@/styles/Shop.module.css";
import Image from "next/image";
import ItemCard from "@/components/shop/ItemCard";
import Shop from "@/pages/Shop";

function ProductsPage({ itemsObject }) {
  return (
    <ul className={styles.gridWrapper}>
      {itemsObject.map((item, index) => {
        // console.log(item.alttext);

        if (item.type === "Product") {
          return (
            <ItemCard
              key={index}
              imageURL={item.imgsrc}
              title={item.title}
              price={item.actualPrice}
              alttext={item.alttext}
              width={item.imgWidth}
              height={item.imgHeight}
            />
          );
        }
      })}
    </ul>
  );
}

export default ProductsPage;
