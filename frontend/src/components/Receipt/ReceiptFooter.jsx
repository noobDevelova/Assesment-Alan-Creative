import React from "react";
import ReactToPrint from "react-to-print";
import { Split } from "../../assets/icon";
import "../../index.css";

const ReceiptFooter = ({ data, handleShow, printRef, handleSave }) => {
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
    <div className="receipt-footer">
      <div className="action-wrapper">
        <button className="btn-action" onClick={handleSave}>
          Save Bill
        </button>
        <ReactToPrint
          trigger={() => <button className="btn-action">Print Bill</button>}
          content={() => printRef.current}
        />
      </div>
      <button className="charge-btn" onClick={handleShow}>
        <div className="btn-icon-wrapper">
          <img src={Split} alt="" className="icon-btn" />
          <p>Split Bill</p>
        </div>
        <div className="text-wrapper">
          <p>Charge {formattedTotalPrice}</p>
        </div>
      </button>
    </div>
  );
};

export default ReceiptFooter;
