import MainNav from "@/components/MainNav";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Image from "next/image";
import styles from "@/styles/cart.module.css";
import Table from "@/components/shop/Table";

export default function Cart(ShoppingCartProps) {
  const { cartItems, cartQuantity } = useShoppingCart();
  // if (cartItems) {
  //   return (
  //     <div>
  //       <MainNav />
  //       <div className={styles.cartTitle}>Cart Checkout</div>

  //       {cartItems.map((item) => {
  //         // console.log(item.data);
  //         // console.log(cartQuantity);
  //         // console.log(item.quantity);
  //         // console.log(item.data.actualPrice);
  //         let itemTotalPrice;
  //         let formattedItemTotalPrice;
  //         if (item.data.actualPrice !== NaN && item.quantity !== NaN) {
  //           let priceAsNum = +item.data.actualPrice.slice(1);
  //           // console.log(typeof priceAsNum);
  //           itemTotalPrice = +(+item.quantity * +priceAsNum);
  //           // console.log(`${itemTotalPrice}.00`);
  //           formattedItemTotalPrice = `$${itemTotalPrice}.00`;
  //         }

  //         return (
  //           <div key={item.data.APIid} className={styles.cartItemWrapper}>
  //             <Image
  //               src={item.data.imgsrc}
  //               width="250"
  //               height="250"
  //               priority
  //               alt={item.data.alttext}
  //               key={item.data.APIid}
  //               className={styles.cartImg}
  //             />
  //             <div>{item.data.title}</div>
  //             <div>{item.quantity}</div>
  //             <div>{item.data.actualPrice}</div>
  //             <div>{formattedItemTotalPrice}</div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // }
  if (!cartItems) {
    return <div>Cart is empty</div>;
  }

  return <Table data={cartItems} />;
}
