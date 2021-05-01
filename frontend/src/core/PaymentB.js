import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cartEmpty, loadCart } from "./helper/cartHelper";
import { createOrder } from "./helper/orderHelper";
import { getMeToken, processCurrentPayment } from "./helper/paymentBHelper";
import DropIn from "braintree-web-drop-in-react";
import { isAuthenticated } from "../auth/helper";

const PaymentB = ({ products, setReload = (f) => f, reload = undefined }) => {
  const [info, setInfo] = useState({
    loading: false,
    success: false,
    clientToken: null,
    error: "",
    instance: {},
  });

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;
  const getToken = (userId, token) => {
    getMeToken(userId, token).then((info) => {
      console.log(info);
      if (info.error) {
        setInfo({ ...info, error: info.error });
      } else {
        const clientToken = info.clientToken;
        setInfo({ clientToken });
      }
    });
  };

  const onPurchase = () => {
    setInfo({ loading: true });
    let nonce;
    let getNonce = info.instance
  };

  const showBrainTreeDropIn = (products) => {
    return (
      <div>
        {info.clientToken !== null && products.length > 0 ? (
          <div>
            <DropIn
              options={{ authorization: info.clientToken }}
              onInstance={(instance) => (info.instance = instance)}
            />
            <button className="btn btn-bock  btn-success" onClick={() => {}}>
              Buy
            </button>
          </div>
        ) : (
          <div>
            <h3>Please Add Somthing to Cart</h3>
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    getToken(userId, token);
  }, []);

  return (
    <div>
      <h3>Test for BrainTree</h3>
    </div>
  );
};

export default PaymentB;
