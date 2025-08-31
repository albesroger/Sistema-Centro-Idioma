import { Sequelize } from "sequelize";

const sequelize = new Sequelize("api_node", "root", "root-123", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
