import React, { useState, useEffect } from "react";
import "./ShoppingCart.css";
import { useSelector, useDispatch } from "react-redux";

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const isRefresh = useSelector((state) => state.isRefresh);
  console.log(isRefresh);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
      dispatch({
        type: "actualiserCart",
        payload: JSON.parse(localStorage.getItem("cart")),
      });
    }
  }, [isRefresh]);

  const handleChange = (event, id) => {
    const indexItem = cart.findIndex((obj) => obj.id === id);

    const objUpdated = {
      ...cart[indexItem],
      quantity: Number(event.target.value),
    };

    dispatch({
      type: "UPDATEITEM",
      payload: objUpdated,
    });
    dispatch({
      type: "setIsRefresh",
    });
  };
  function getTotal() {
    let totalPrice = 0;
    for (const item of cart) {
      const itemPrice = item.price * item.quantity;
      totalPrice += itemPrice;
    }
    console.log(totalPrice);
    return totalPrice;
  }

  return (
    <div className="global-container">
      <p className="heading-cart">Votre panier :</p>
      <ul className="cart-list">
        {cart?.map((item) => (
          <li key={item.id}>
            <img
              src={process.env.PUBLIC_URL + `/images/${item.img}.png`}
              alt=""
            />
            <div className="bloc-cart-infos">
              <h4>{item.title}</h4>
              <p>Price: {item.price}€</p>
            </div>
            <div className="bloc-input">
              <label htmlFor="quantityInput">Quantité</label>
              <input
                onChange={(e) => handleChange(e, item.id)}
                id="quantityInput"
                type="number"
                value={item.quantity}
              />
            </div>
          </li>
        ))}
      </ul>
      <p className="total-price">Total : {`${getTotal().toFixed(2)}€`}</p>
      <button className="btn-cart">Procéder au paiement</button>
    </div>
  );
}
