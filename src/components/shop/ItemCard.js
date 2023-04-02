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
  gridIndex,
}) {
  return (
    <div className={styles.cardWrapper}>
      <Image
        src={imageURL}
        className={styles.cardImage}
        width={width}
        height={height}
      ></Image>
      <div>{title}</div>
      <div>{price}</div>
    </div>
  );
}
