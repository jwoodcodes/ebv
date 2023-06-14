import { useShoppingCart } from "@/context/ShoppingCartContext";

export default function ShoppingCart(ShoppingCartProps) {
  const { cartItems } = useShoppingCart;
  return (
    <div>
      <div>cart</div>
    </div>
  );
}
