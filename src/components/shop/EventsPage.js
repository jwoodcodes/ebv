import styles from "@/styles/Shop.module.css";
import Image from "next/image";
import ItemCard from "@/components/shop/ItemCard";

export default function EventsPage({ itemsObject }) {
  return (
    <ul className={styles.gridWrapper}>
      {itemsObject.map((item, index) => {
        // console.log(item.alttext);
        if (item.type === "Event") {
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
