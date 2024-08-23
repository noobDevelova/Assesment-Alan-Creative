import React, { useState } from "react";
import { ReceiptContainer } from "../components";
import "../index.css";

export const Receipt = ({ handleChargeClick, handleShowSaved, data }) => {
  return (
    <div className="receipt-container">
      <ReceiptContainer
        data={data}
        handleShow={() => handleChargeClick()}
        handleSave={() => handleShowSaved()}
      />
    </div>
  );
};
