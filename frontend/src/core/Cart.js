import React, { useState, useEffect } from "react";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import PaymentB from "./PaymentB";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart);
  }, [reload]);

  const loadAllProducts = (products) => {
    return (
      <div>
        <h2>Products in Cart</h2>

        {!products ? (
          <h4>Cart is Empty</h4>
        ) : (
          products.map((product, index) => (
            <Card
              key={index}
              product={product}
              addToCart={false}
              removeFromCart={true}
              setReload={setReload}
              reload={reload}
            />
          ))
        )}
      </div>
    );
  };

  return (
    <Base title="Cart Page" description="Ready to Checkout">
      <div className="row text-center">
        <div className="col-6">
          {products.length > 0 ? (
            loadAllProducts(products)
          ) : (
            <h3>No products in Cart</h3>
          )}
        </div>
        <div className="col-6">
          <PaymentB products={products} setReload={setReload} />
        </div>
      </div>
    </Base>
  );
}
