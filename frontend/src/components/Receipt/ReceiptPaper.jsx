import React, { forwardRef } from "react";
import { Arrow } from "../../assets/icon";
import "../../index.css";
import ReceiptItem from "./ReceiptItem";

const ReceiptPaper = forwardRef(({ data }, ref) => {
  const totalPrice = data?.reduce(
    (total, item) => total + item.menu_price * item.quantity,
    0
  );
  const formattedTotalPrice = totalPrice?.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return (
    <div className="paper-container" ref={ref}>
      <div className="paper-header">
        <div className="wrapper">
          <p>Dine In</p>
          <img src={Arrow} alt="" />
        </div>
      </div>
      <div className="paper-items-wrapper">
        <div className="paper-item-header">
          <p>1</p>
          <p className="right-val">View Table</p>
        </div>
        {data?.map((item, index) => (
          <ReceiptItem
            key={index}
            quantity={item.quantity}
            description={item.menu_name}
            price={item.menu_price}
          />
        ))}
        <div className="paper-item-footer">
          <p>Total :</p>
          <p className="right-val">{formattedTotalPrice}</p>
        </div>
      </div>
      <div className="paper-footer">
        <button className="btn">Clear Sale</button>
      </div>
    </div>
  );
});

export default ReceiptPaper;
