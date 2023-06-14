import { useShoppingCart } from "@/context/ShoppingCartContext";

export default function Cart(ShoppingCartProps) {
  const { cartItems } = useShoppingCart();
  return (
    <div>
      <div>cart</div>
      {cartItems.map((items) => {
        console.log(items.data);
      })}
    </div>
  );
}
