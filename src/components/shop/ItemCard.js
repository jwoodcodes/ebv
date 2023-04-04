import Link from "next/link";
import styles from "@/styles/Shop.module.css";
import Image from "next/image";

export default function ItemCard({
  imageURL,
  title,
  price,
  altText,
  width,
  height,
}) {
  return (
    <div className={styles.cardWrapper}>
      <Image
        src={imageURL}
        className={styles.cardImage}
        lazy="true"
        width={width}
        height={height}
        altText={altText}
      ></Image>
      <div className={styles.cardItemTitle}>{title}</div>
      <div className={styles.cardItemPrice}>{price}</div>
    </div>
  );
}
