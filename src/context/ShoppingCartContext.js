import React from "react";
import { ReactNode, createContext, useContext } from "react";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = React.useState([]);

  function increaseCartQuantity(number) {
    setCartItems((curritems) => {
      if (curritems.find((item) => item.id === id) == null) {
        return [...curritems, { id, quantity: 1 }];
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

  function decreaseCartQuantity(number) {
    setCartItems((curritems) => {
      if (curritems.find((item) => item.id === id)?.quantity === 1) {
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
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
