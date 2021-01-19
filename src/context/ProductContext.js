
import React, { useState, createContext, useEffect } from "react";
import { Products } from "./Products";

export const productContext = createContext();

const ContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState(Products);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);


  const addToCart = (id) => {
    const check = cart.every((item) => item._id !== id);
    if (check) {
      const newItem = allProducts.filter((item) => item._id === id);
      setCart([...cart, ...newItem]);
    }
  };

  const increase = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
    Total();
  };

  const decrese = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
    Total();
  };

  const deleteFromCart = (id) => {
    cart.forEach((item, index) => {
      if (item._id === id) {
        cart.splice(index, 1);
      }
    });

    setCart([...cart]);
    Total();
  };

  const Total = () => {
    const getTotal = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);

    setTotal(getTotal);
  };

  return (
    <productContext.Provider
      value={{
        allProducts,
        addToCart,
        deleteFromCart,
        cart,
        Total,
        total,
        increase,
        decrese
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ContextProvider;
