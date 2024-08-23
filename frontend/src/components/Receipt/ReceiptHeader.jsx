import React from "react";
import { List, User } from "../../assets/icon";
import "../../index.css";

const ReceiptHeader = () => {
  return (
    <div className="receipt-header">
      <div className="icon-wrapper">
        <img src={User} alt="" />
        <p>Customer</p>
      </div>
      <div className="receipt-title">
        <h2>New Customer</h2>
      </div>
      <div className="icon-wrapper">
        <img src={List} alt="" />
        <p>Billing List</p>
      </div>
    </div>
  );
};

export default ReceiptHeader;
