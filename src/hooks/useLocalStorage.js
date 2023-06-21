import React from "react";

export function useLocalStorage(key, initialValue) {
  //   console.log(key);
  //   console.log(initialValue);
  const [value, setValue] = React.useState(() => {
    if (typeof window !== "undefined") {
      const jsonValue = localStorage.getItem(key);
      //   console.log(jsonValue);
      //   if (jsonValue != null || jsonValue !== undefined) {
      //     return JSON.parse(jsonValue);
      //   }
    }
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
