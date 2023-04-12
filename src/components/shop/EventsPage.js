import styles from "@/styles/Shop.module.css";
import Image from "next/image";
import ItemCard from "@/components/shop/ItemCard";

export default function EventsPage() {
  return (
    <>
      <ItemCard
        imageURL="/bel-airs.jpg"
        title="The Bel Airs"
        price="$5.00"
        alttext="the band the Bel Airs"
        width="360"
        height="360"
      />
      <ItemCard
        imageURL="/mick-byrd.jpg"
        title="Mick Byrd and the Backroad Band"
        price="$5.00"
        alttext="Mick Beard"
        width="360"
        height="360"
      />
      <ItemCard
        imageURL="/hart-creek-ramblers.jpg"
        title="Hart Creek Ramblers"
        price="$5.00"
        alttext="Hart Creek Ramblers Band"
        width="360"
        height="360"
      />
      <ItemCard
        imageURL="/apostles-creek.jpg"
        title="Apostle's Creek"
        price="$5.00"
        alttext="Apostle's Creek Band"
        width="360"
        height="360"
      />
    </>
  );
}
