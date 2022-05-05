import React, { useEffect, useState } from "react";
import cartIcon from "./shopping-cart.svg";
import "./FloatingCart.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function FloatingCart() {
  const shoppingCart = useSelector((state) => state);
  const isRefresh = useSelector(state => state.isRefresh)
  const [totalItems, setTotalItems] = useState(0)
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setTotalItems(JSON.parse(localStorage.getItem("cart")).length);
    }
  }, [isRefresh]);
  function getTotalPrice() {
    let totalItems = 0;
    for (const item of shoppingCart.cart) {
      totalItems += item.quantity;
    }
    return totalItems;
  }

  return (
    <Link to="/shoppingCart">
      <div className="floating-cart">
        <p>Votre Panier</p>
        <div className="img-notif-container">
          <img src={cartIcon} alt="icône cadi" />
          <span className="notif">{totalItems}</span>
        </div>
      </div>
    </Link>
  );
}
