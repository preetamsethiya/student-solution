import { useContext, useEffect, useState } from "react";

export const UseLocalstorage = (key, initialValue) => {
  const [data, setData] = useState(initialValue);
  //   debugger;
  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem(key));
    if (existingData) {
      setData(existingData);
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
    }
  }, []);

  const setLocalstorage = (item) => {
    localStorage.setItem(key, JSON.stringify(item));
    setData(item);
  };
  return [data, setLocalstorage];
};
