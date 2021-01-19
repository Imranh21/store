import React, { useContext, useEffect } from "react";
import { productContext } from "../../context/ProductContext";
import { CartProduct } from "./CartProduct";
import styles from "./Carts.module.css";

const Cart = () => {
  const { cart, deleteFromCart, Total, total } = useContext(productContext);

  useEffect(() => {
    Total();
  }, []);

  return (
    <div>
      <h2 className={styles.heading}>Cart</h2>

      <div className={styles.cartContainer}>
        <div className={styles.cartItems}>
          {cart.map((cartItem) => {
            return <CartProduct key={cartItem._id} cartItem={cartItem} />;
          })}
        </div>

        <div className={styles.cartTotal}>
          <div className={styles.totalInfo}>
            <p>Total</p>
            <h4 className={styles.price}>$ {total} </h4>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
