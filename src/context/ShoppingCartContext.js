import React from "react";
import { ReactNode, createContext, useContext } from "react";

export const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function increaseCartQuantity(id, data) {
    // console.log(id);
    setCartItems((curritems) => {
      if (curritems.find((item) => curritems[0].id === id) == null) {
        console.log(curritems);
        return [...curritems, { id, data, quantity: 1 }];
      } else {
        return curritems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id) {
    setCartItems((curritems) => {
      if (curritems.find((item) => curritems.id === id)?.quantity === 1) {
        return curritems.filter((item) => item.id !== id);
      } else {
        return curritems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function getItemQuantity(id) {
    return cartItems.find((item) => item.id)?.quantity || 0;
  }

  function removeFromCart(id) {
    setCartItems((curritems) => {
      return curritems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      {/* <ShoppingCart /> */}
    </ShoppingCartContext.Provider>
  );
}
