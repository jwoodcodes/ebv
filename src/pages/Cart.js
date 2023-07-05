import MainNav from "@/components/MainNav";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Image from "next/image";
import styles from "@/styles/cart.module.css";
import Table from "@/components/shop/Table";
import AllCheckoutItemsPriceAndCheckoutButton from "@/components/shop/AllCheckoutItemsPrice&CheckoutButton";
import Footer from "@/components/home/Footer";

export default function Cart(ShoppingCartProps) {
  const { cartItems, cartQuantity } = useShoppingCart();
  if (cartItems) {
    return (
      <div>
        <MainNav />
        <div className={styles.cartTitle}>Cart Checkout</div>

        <Table data={cartItems} />
        <AllCheckoutItemsPriceAndCheckoutButton data={cartItems} />
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </div>
    );
  }

  if (!cartItems) {
    return <div>Cart is empty</div>;
  }
}
