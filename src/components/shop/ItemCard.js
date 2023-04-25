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
        alt={alttext}
      ></Image>
      <div className={styles.cardItemTitle}>{title}</div>
      <div className={styles.cardItemPrice}>{price}</div>
      // next thing to try is to put the Link below into a component and render
      that component below and // pass ${title} as a prop to that component. IDK
      <Link
        href={{
          pathname: "/ShopItemDetails/[title]",
          query: { title: `${title}` },
        }}
        className={styles.cardMoreDetails}
        title={`${title}`}
      >
        Full Description & To Order &rarr;
      </Link>
    </div>
  );
}
