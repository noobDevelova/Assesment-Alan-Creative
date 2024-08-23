import React from "react";
import "../../index.css";

const ReceiptItem = ({ quantity, description, price }) => {
  return (
    <div className="paper-item">
      <p className="description">{description}</p>
      <p className="quantity">x {quantity}</p>
      <p className="price">{price}</p>
    </div>
  );
};

export default ReceiptItem;
