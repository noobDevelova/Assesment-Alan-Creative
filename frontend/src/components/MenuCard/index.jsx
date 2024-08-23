import React from "react";
import { Spaghetti } from "../../assets/img";
import "../../index.css";

const MenuCard = ({ menuName, img, onClick, onEdit }) => {
  const menuNameSliced = menuName.slice(0, 2);

  return (
    <div className="card-container" onClick={onClick}>
      <div className="card-image">
        {img ? <img src={img} alt="" /> : <h2>{menuNameSliced}</h2>}
      </div>
      <div className="card-desc">
        <p className="card-title">{menuName}</p>
      </div>
    </div>
  );
};

export default MenuCard;
