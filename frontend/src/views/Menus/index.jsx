import React from "react";
import { useNavigate } from "react-router-dom";
import { ListMenu } from "../../fragments/ListMenu";
import "../../index.css";

const Menus = () => {
  const navigate = useNavigate();

  const handleUpdateMenu = (id) => {
    navigate(`/update-menu/${id}`);
  };
  return (
    <div className="container">
      <h1>List Menu</h1>
      <button onClick={() => navigate("/")}>POS</button>
      <button onClick={() => navigate("/add-menu")}>Add Menu</button>
      <ListMenu editMenu={handleUpdateMenu} />
    </div>
  );
};

export default Menus;
