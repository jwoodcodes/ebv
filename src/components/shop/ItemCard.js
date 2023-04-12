import Link from "next/link";
import styles from "@/styles/Shop.module.css";
import Image from "next/image";

export default function ItemCard({
  imageURL,
  title,
  price,
  alttext,
  width,
  height,
}) {
  return (
    <div className={styles.cardWrapper}>
      <Image
        src={imageURL}
        className={styles.cardImage}
        priority
        width={width}
        height={height}
        alttext={alttext}
      ></Image>
      <div className={styles.cardItemTitle}>{title}</div>
      <div className={styles.cardItemPrice}>{price}</div>
    </div>
  );
}
