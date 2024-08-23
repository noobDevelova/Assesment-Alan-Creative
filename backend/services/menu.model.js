import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

console.log("model loaded");

const Menu = sequelize.define(
  "Menu",
  {
    menu_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    menu_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    menu_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    menu_img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    show_on_catalog: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "menu",
    timestamps: false,
  }
);

export default Menu;
