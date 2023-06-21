import { useShoppingCart } from "@/context/ShoppingCartContext";
import MainNav from "./MainNav";

export default function ShoppingCart(ShoppingCartProps) {
  const { cartItems, cartQuantity } = useShoppingCart;
  return (
    <div>
      <MainNav />
      <div>cart</div>
      {cartItems.map((items) => {
        // console.log(items.data);
        // console.log(cartQuantity);
      })}
    </div>
  );
}
