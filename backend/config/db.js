import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log(`Connection to MySQL has been estabilished succesfully`);
  })
  .catch((err) => {
    console.log(`Unable to connect to the MySQL database: ${err}`);
  });

export default sequelize;
