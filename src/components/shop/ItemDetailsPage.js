import MainNav from "../MainNav";
import Image from "next/image";
import styles from "@/styles/ItemDetailsPage.module.css";
import Footer from "../home/Footer";
import Link from "next/link";
import React from "react";
import { useShoppingCart } from "@/context/ShoppingCartContext";

export default function ItemDetailsPage({ itemName, data }) {
  const [deliveryMethod, setDeliveryMthod] = React.useState("shipping");
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  //   console.log({ data });
  let itemsArray;
  let quantity;

  {
    data.map((items) => {
      //   console.log(items.allShopData);
      itemsArray = items.allShopData;
    });
  }

  return (
    <div>
      <MainNav />
      <div className={styles.itemTitle}>{itemName}</div>
      <div className={styles.backToShopLinkWrapper}>
      <Link href="/Shop" className={styles.backToShopLink}>
        ← Back to shop
      </Link>
      </div>
      {itemsArray.map((product, index) => {
        // console.log(product.APIid);
        const quantity = getItemQuantity(product.APIid);
        // console.log(getItemQuantity(product.APIid));
        // console.log(quantity);
        // console.log(itemName, product.title);
        // console.log(product.APIid);
        if (itemName === product.title) {
          return (
            <div className={styles.mainWrapper} key={index}>
              <div className={styles.imgWrapper}>
                <Image
                  src={product.imgsrc}
                  width="550"
                  height="550"
                  priority
                  alt={product.alttext}
                  key={index}
                  className={styles.itemImg}
                />
              </div>
              <div className={styles.orderAndDescWrapper}>
                <div className={styles.innerorderAndDescWrapper}>
                  <div className={styles.addToCartWrapper}>
                    {/* <button className={styles.removeOneFromCartBtn}>-1</button> */}
                    {quantity === 0 ? (
                      <button
                        className={styles.addToCartButton}
                        onClick={() =>
                          increaseCartQuantity(product.APIid, product)
                        }
                      >
                        + Add To Cart
                      </button>
                    ) : (
                      <div
                        className={
                          styles.cartAddOrRemoveIfItemIsInCartAlreadyContainer
                        }
                      >
                        <div
                          className={
                            styles.cartAddOrRemoveIfItemIsInCartAlready
                          }
                        >
                          <button
                            className={styles.minusFromCartBtn}
                            onClick={() => decreaseCartQuantity(product.APIid)}
                          >
                            -
                          </button>
                          <div
                            className={styles.howManyInCartTextWhenItemIsInCart}
                          >
                            <span className={styles.addToCartSpan}>
                              {quantity}
                            </span>
                            {""}
                            in cart
                          </div>
                          <button
                            className={styles.plusToCartBtn}
                            onClick={() => increaseCartQuantity(product.APIid)}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className={styles.removeFromCartButton}
                          onClick={() => removeFromCart(product.APIid)}
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                  <form>
                    <div className={styles.radioButtonsWrapper}>
                      <h3 className={styles.hotToGetIt}>How to get it</h3>
                      <div className={styles.shippingRadio}>
                        <input
                          type="radio"
                          name="delivery-method"
                          id="shipping-yes"
                          value="shipping"
                          checked={deliveryMethod === "shipping"}
                          onChange={(event) => {
                            setDeliveryMthod(event.target.value);
                          }}
                        />
                        <label htmlFor="shipping-yes">
                          {""} <b>Shipping</b> <br /> Free shipping for orders
                          over $100, where available
                        </label>
                      </div>

                      <div className={styles.pickupRadio}>
                        <input
                          type="radio"
                          name="delivery-method"
                          id="pickup-yes"
                          value="store-pickup"
                          checked={deliveryMethod === "store-pickup"}
                          onChange={(event) => {
                            setDeliveryMthod(event.target.value);
                          }}
                        />
                        <label htmlFor="pickup-yes">
                          {""} <b>Store Pickup</b> <br /> ElderBlossom View
                          Online shipping <br /> 208 County Road 398 NEW
                          BLOOMFIELD, MO
                        </label>
                      </div>
                    </div>
                  </form>
                  <div className={styles.itemDescriptionWrapper}>
                    <div className={styles.descriptionSpan}>Description</div>
                    <div className={styles.itemDescription}>
                      {" "}
                      {product.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
      <Footer />
    </div>
  );
}
