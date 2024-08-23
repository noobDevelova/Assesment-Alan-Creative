import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../index.css";

const AddMenu = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [showOnCatalog, setShowOnCatalog] = useState(false);
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("menu_name", name);
    formData.append("menu_price", Number(price));
    formData.append("menu_img", image || "");
    formData.append("show_on_catalog", showOnCatalog);

    try {
      await axios.post("http://localhost:3000/api/menus", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Menu added successfully");
    } catch (error) {
      console.error("Error adding menu:", error);
    } finally {
      navigate("/menus");
    }
  };

  return (
    <div className="container">
      <div>Add New Menu</div>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="menu_name">Menu Name</label>
          <input
            type="text"
            id="menu_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="menu_price">Menu Price</label>
          <input
            type="number"
            id="menu_price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="menu_image">Menu Image</label>
          <input type="file" id="menu_image" onChange={handleImageChange} />
        </div>
        <div className="form-input">
          <label htmlFor="show_on_catalog">Show on Catalog</label>
          <select
            id="show_on_catalog"
            value={showOnCatalog ? "true" : "false"}
            onChange={(e) => setShowOnCatalog(e.target.value === "true")}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="btn-wrapper">
          <button type="submit" className="primary">
            Add Menu
          </button>
          <button onClick={() => navigate("/menus")}>Back</button>
        </div>
      </form>
    </div>
  );
};

export default AddMenu;
