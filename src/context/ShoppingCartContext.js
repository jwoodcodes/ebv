import React from "react";
import { ReactNode, createContext, useContext } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [cartItems, setCartItems] = useLocalStorage("cart-items", []);

  // React.useEffect(() => {
  //   setCartItems([]);
  // }, []);
  let cartQuantity = 0;

  // React.useEffect(() => {

  // if (cartItems.length > 0 && cartItems !== null) {

  // if (cartItems && cartItems[0]) {

  // const cartQuantity = cartItems.reduce(

  //   (quantity, item) => item.quantity + quantity,
  //   0
  // );
  if (cartItems && cartItems.length > 0) {
    // cartQuantity = cartItems.reduce((accum, valueToAdd) => {

    //   // console.log(valueToAdd.quantity);
    //   return accum.quantity + valueToAdd.quantity, 0;
    // });

    cartItems.forEach(function (item) {
      // console.log(cartItems);
      // console.log(item, item.quantity);
      // console.log(item.quantity);
      // console.log(cartQuantity);
      cartQuantity = cartQuantity + item.quantity;
      // console.log(cartQuantity);
      return cartQuantity;
    });
  }

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function increaseCartQuantity(id, data) {
    // console.log(id, data);
    // console.log(data);
    if (!cartItems[0]) {
      // console.log(cartItems);
      return setCartItems([{ id, data, quantity: 1 }]);
    }

    // console.log(cartItems[0]);
    ///
    setCartItems((curritems) => {
      // console.log(curritems);

      if (cartItems.length === 0 || curritems === null) {
        // console.log(id, data);
        // console.log("from 1");
        return { id, data, quantity: 1 };
      }

      if (cartItems.length > 0) {
        if (curritems.find((item) => item.id === id) == null) {
          // console.log(item);
          // console.log("from 2");
          return [...curritems, { id, data, quantity: 1 }];
        } else {
          return curritems.map((item) => {
            // console.log(item);
            // console.log("from 3");
            if (item.id === id) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          });

          //       if (item.id === id) {
          // return { id, quantity: item.quantity + 1 };
        }

        //   if (curritems) {
        //     // if (curritems.find((item) => curritems[0].id === id) == null) {
        //     //   return [...curritems, { id, data, quantity: 1 }];
        //     // } else {
        //     return curritems.map((item) => {
        //       if (item.id === id) {
        //         return { ...item, id, quantity: item.quantity + 1 };
        //       }
      }
      //   }
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
          }
          //   else {

          // });
        });
      }
    });
  }

  function getItemQuantity(id) {
    // console.log(id);
    // let placeholder = 0;
    // let testValue;

    // console.log(cartItems);

    if (cartItems === 0) {
      return;
    }

    return cartItems.find((item) => item.id === id)?.quantity || 0;

    // if (cartItems && cartItems !== null) {
    //   // console.log(cartItems);

    //   if (cartItems.length > 0) {                        zxs
    //     testValue = cartItems.forEach(function (item) {
    //       // console.log(item.quantity);

    //       if (item.id) {
    //         if (item.id === id) {
    //           // console.log(item.quantity);
    //           return item.quantity;
    //         }
    //       }
    //       console.log(testValue);
    //       return testValue;
    //     });

    //     if ((cartItems && !cartItems[0]) || cartItems === null) {
    //       return 0;
    //     }
    //     // console.log(cartItems);
    //   }
    // }
  }

  function removeFromCart(id) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
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
