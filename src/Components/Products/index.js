import React from "react";
import "./styles/style.css";

function Product() {
  const sym = "₦";
  return (
    <div className="Product">
      <img
        src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/220566/1.jpg?2959"
        alt=""
      />
      <p>Oraimo Bluetooth Wireless SOUNDBAR SPEAKER</p>
      <b>{`${sym} 16,500`}</b>
      <small>{`${sym} 20,000`}</small>
    </div>
  );
}

export default Product;
