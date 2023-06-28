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
  // console.log(cartItems);
  // if (cartItems.length > 0 && cartItems !== null) {
  // console.log(cartItems);
  // if (cartItems && cartItems[0]) {
  // console.log(cartItems);

  // const cartQuantity = cartItems.reduce(

  //   (quantity, item) => item.quantity + quantity,
  //   0
  // );
  if (cartItems && cartItems.length > 0) {
    // console.log(cartItems.length);
    // cartQuantity = cartItems.reduce((accum, valueToAdd) => {
    //   console.log(accum);
    //   // console.log(valueToAdd.quantity);
    //   return accum.quantity + valueToAdd.quantity, 0;
    // });

    cartItems.forEach(function (item) {
      console.log(cartItems);
      console.log(item, item.quantity);
      console.log(item.quantity);
      console.log(cartQuantity);
      cartQuantity = cartQuantity + item.quantity;
      console.log(cartQuantity);
      return cartQuantity;
    });
  }

  // cartQuantity = cartItems.reduce(function (quantity, item) {
  //   console.log(quantity.quantity);
  //   console.log(item.quantity, quantity);
  //   // console.log(item.quantity);
  //   item.quantity + quantity.quantity, 0;
  // });

  // cartQuantity = cartItems.reduce(function (item, quantity) {
  //   console.log(quantity);
  //   item.quantity + quantity, 0;
  // });
  // }

  // cartQuantity = cartItems.reduce(
  //   (quantity, item) =>
  //     item.quantity + quantity,
  //   0
  // );
  // }, [cartItems]);

  // let cartQuantity;

  // React.useEffect(() => {
  //   // console.log(cartItems.length);
  //   if (cartItems.length === 0) {
  //     let cartQuantity = 0;
  //   }

  //   if (cartItems.length > 0) {
  //     console.log(cartItems);
  //     cartItems.map(function (item) {
  //       console.log(item);
  //       // let cartQuantity = item.quantity;
  //       let cartQuantity = 0;
  //       return cartQuantity;
  //     });

  //     // let cartQuantity = cartItems.reduce(
  //     //   (quantity, item) => item.quantity + quantity,
  //     //   0
  //     // );

  //     // let cartQuantity = cartItems.reduce(function (quantity, item) {
  //     //   item.quantity + quantity, 0;
  //     // });
  //   }
  // }, [cartItems]);

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
        return { id, data, quantity: 1 };
      }

      if (cartItems.length > 0) {
        if (curritems.find((item) => item.id === id) == null) {
          // console.log(item);
          return [...curritems, { id, data, quantity: 1 }];
        } else {
          return curritems.map((item) => {
            // console.log(item);
            if (item.id === id) {
              return { ...item, id, quantity: item.quantity + 1 };
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
          } else {
            return item;
          }
        });
      }
    });
  }

  function getItemQuantity(id) {
    // console.log(id);
    // let placeholder = 0;
    // let testValue;

    return cartItems.find((item) => item.id === id)?.quantity || 0;

    // if (cartItems && cartItems !== null) {
    //   // console.log(cartItems);

    //   if (cartItems.length > 0) {
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
