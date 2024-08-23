import React, { useState } from "react";
import "../../index.css";

const PopUpCharge = ({ handleClose, totalPrice }) => {
  const [inputValue, setInputValue] = useState(0);
  const [change, setChange] = useState(0);

  const handleInputChange = (e) => {
    const input = parseInt(e.target.value) || 0;
    setInputValue(input);
    setChange(input - totalPrice);
  };

  const formattedChange = change.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const formattedTotalPrice = totalPrice.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div className="backdrop">
      <div className="pop-up-container">
        <div className="pop-up-header">
          <p>Charge</p>
        </div>
        <div className="pop-up-body">
          <h2>Total Charge : {formattedTotalPrice}</h2>
          <input
            type="number"
            className="pop-up-input"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="0"
          />
          <h3>Change : {formattedChange}</h3>
        </div>
        <div className="pop-up-footer" onClick={handleClose}>
          <button>Ok</button>
        </div>
      </div>
    </div>
  );
};

export default PopUpCharge;
