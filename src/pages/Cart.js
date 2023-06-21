import MainNav from "@/components/MainNav";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Image from "next/image";
import styles from "@/styles/cart.module.css";

export default function Cart(ShoppingCartProps) {
  const { cartItems, cartQuantity } = useShoppingCart();
  return (
    <div>
      <MainNav />
      <div className={styles.cartTitle}>Cart Checkout</div>
      {cartItems.map((item) => {
        console.log(item.data);
        console.log(cartQuantity);

        return (
          <div key={item.data.APIid} className={styles.cartItemWrapper}>
            <Image
              src={item.data.imgsrc}
              width="250"
              height="250"
              priority
              alt={item.data.alttext}
              key={item.data.APIid}
              className={styles.cartImg}
            />
            <div>{item.data.title}</div>
            <div>{item.data.actualPrice}</div>
            <div>
              {/* `Total Price: ${+item.data.actualPrice.slice(1) * cartQuantity}` */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
