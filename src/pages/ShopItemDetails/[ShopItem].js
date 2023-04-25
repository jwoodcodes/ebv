import { useRouter } from "next/router";
import Shop from "../Shop";
import ItemCard from "@/components/shop/ItemCard";

const ShopItem = ({ title }) => {
  const router = useRouter();
  const { pid } = router.query;
  console.log(title);
  return <p>Post: {pid}</p>;
};

export default ShopItem;
