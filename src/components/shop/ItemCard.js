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
    <Link
      href={{
        pathname: "/ShopItemDetails/[title]",
        query: { title: `${title}` },
      }}
      className={styles.cardWrapper}
      title={`${title}`}
    >
      <Image
        src={imageURL}
        className={styles.cardImage}
        priority
        width={width}
        height={height}
        alt={alttext}
      />
      <div className={styles.cardItemTitle}>{title}</div>
      <div className={styles.cardItemPrice}>{price}</div>
      <div className={styles.cardMoreDetails}>
        Description & to order &rarr;
      </div>
    </Link>
  );
}
