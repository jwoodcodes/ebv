import React from "react";

export function useLocalStorage(key, defaultValue) {
  //   console.log(key);
  //   console.log(defaultValue);
  //   console.log(id);
  //   const [value, setValue] = React.useState(() => {
  //     if (typeof window !== "undefined") {
  //       const jsonValue = localStorage.getItem(key);
  //       //   console.log(jsonValue);
  //       if (jsonValue) {
  //         let json = JSON.parse(jsonValue);
  //         return json;
  //       }

  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    let currentValue;

    if (typeof window !== "undefined") {
      try {
        //   console.log(key);
        currentValue = JSON.parse(localStorage.getItem(key) || String([]));
      } catch (error) {
        currentValue = [];
      }
      // console.log(currentValue);
    }
    setValue(currentValue);
  });

  //   if (typeof window !== "undefined") {
  //     const jsonValue = localStorage.getItem(key);
  //     //   console.log(jsonValue);
  //     if (jsonValue) {
  //       let json = JSON.parse(jsonValue);
  //       satValue(json);
  //     }

  //   if ((jsonValue && jsonValue != null) || jsonValue !== undefined) {
  //     console.log(jsonValue);
  //     // return JSON.parse(jsonValue);
  //   }
  //   }

  React.useEffect(() => {
    // console.log(key);
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  //   console.log(value, setValue);
  return [value, setValue];
}
