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
              price={item.price}
              alttext={item.alttext}
              width={item.imgWidth}
              height={item.imgHeight}
            />
          );
        }
      })}
    </ul>

    // <div className={styles.gridWrapper}>
    //   <ItemCard
    //     imageURL="/bel-airs.jpg"
    //     title="The Bel Airs"
    //     price="$5.00"
    //     alttext="the band the Bel Airs"
    //     width="360"
    //     height="360"
    //   />
    //   <ItemCard
    //     imageURL="/mick-byrd.jpg"
    //     title="Mick Byrd and the Backroad Band"
    //     price="$5.00"
    //     alttext="Mick Beard"
    //     width="360"
    //     height="360"
    //   />
    //   <ItemCard
    //     imageURL="/hart-creek-ramblers.jpg"
    //     title="Hart Creek Ramblers"
    //     price="$5.00"
    //     alttext="Hart Creek Ramblers Band"
    //     width="360"
    //     height="360"
    //   />
    //   <ItemCard
    //     imageURL="/apostles-creek.jpg"
    //     title="Apostle's Creek"
    //     price="$5.00"
    //     alttext="Apostle's Creek Band"
    //     width="360"
    //     height="360"
    //   />
    // </div>
  );
}
