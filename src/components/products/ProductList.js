import React, { useContext } from "react";
import { productContext } from "../../context/ProductContext";

import { Product } from "./Product";

const ProductList = () => {
  const { allProducts, addToCart } = useContext(productContext);

  return (
    <>
      <div>
        <p>Showing {allProducts.length} products</p>
      </div>
      <div className="productContainer">
        {allProducts.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </>
  );
};
export default ProductList;
