import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import ReceiptFooter from "./ReceiptFooter";
import ReceiptHeader from "./ReceiptHeader";
import ReceiptPaper from "./ReceiptPaper";

const ReceiptContainer = ({ data, handleShow, handleSave }) => {
  const receiptPaperRef = useRef();
  const navigate = useNavigate();
  return (
    <div className="receipt-wrapper">
      <ReceiptHeader />
      <ReceiptPaper data={data} ref={receiptPaperRef} />
      <ReceiptFooter
        data={data}
        handleShow={handleShow}
        printRef={receiptPaperRef}
        handleSave={handleSave}
      />
      <button style={{ marginTop: "10px" }} onClick={() => navigate("/menus")}>
        Menu
      </button>
    </div>
  );
};

export default ReceiptContainer;
