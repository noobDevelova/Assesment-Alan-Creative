import axios from "axios";
import React, { useEffect, useState } from "react";
import { MenuCard } from "../components";
import "../index.css";

export const ListMenu = ({ addMenu, editMenu }) => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/menus", {
          signal: controller.signal,
        });
        console.log("datas: ", response.data.data);
        setMenus(response.data.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          console.log("An error occurred: ", error.message);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div className="menu-container">
      {menus?.map((item) => (
        <MenuCard
          key={item.menu_id}
          menuName={item.menu_name}
          img={item.menu_img}
          onClick={addMenu ? () => addMenu(item) : () => editMenu(item.menu_id)}
        />
      ))}
    </div>
  );
};
