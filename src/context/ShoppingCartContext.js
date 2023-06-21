import React from "react";
import { ReactNode, createContext, useContext } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [cartItems, setCartItems] = useLocalStorage(0, []);

  let cartQuantity = 0;

  // React.useEffect(() => {
  //   setCartItems([]);
  // }, []);

  React.useEffect(() => {
    if (cartItems) {
      // console.log(cartItems.length);
      if (cartItems) {
        let cartQuantity = cartItems.reduce(
          (quantity, item) => item.quantity + quantity,
          0
        );
      }
    }
  }, [cartItems]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function increaseCartQuantity(id, data) {
    // console.log(id, data);
    // console.log(data);
    // console.log(cartItems);

    ///
    setCartItems((curritems) => {
      // console.log(curritems);
      if (curritems) {
        // if (curritems.find((item) => curritems[0].id === id) == null) {
        //   return [...curritems, { id, data, quantity: 1 }];
        // } else {
        return curritems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
        });
      }
    });

    if (!cartItems) {
      return setCartItems([{ id, data, quantity: 1 }]);
    }
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
    let placeholder = 0;
    if (cartItems) {
      if (cartItems.length > 0) {
        // console.log(cartItems);
        return cartItems.find((item) => item.id).quantity;
      }
    }
    if (!cartItems) {
      return 0;
    }
  }

  function removeFromCart(id) {
    setCartItems((curritems) => {
      curritems.filter((item) => item.id !== id);
      return 0;
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
