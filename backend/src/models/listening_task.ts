import sequelize from "@/database/connection";
import { Task } from "./task";
import { DataTypes } from "sequelize";

export const Listening_task = sequelize.define("Listening", {
  text_sourse: {
    type: DataTypes.STRING,
  },

  where_found: {
    type: DataTypes.DATE,
  },

  authenticity: {
    type: DataTypes.STRING,
  },

  text_input_type: {
    type: DataTypes.STRING,
  },

  discurse_type: {
    type: DataTypes.STRING,
  },

  length_input: {
    type: DataTypes.INTEGER,
  },

  number_participant: {
    type: DataTypes.INTEGER,
  },

  accens: {
    type: DataTypes.STRING,
  },

  spedd_delivery: {
    type: DataTypes.STRING,
  },

  clarity_articulation: {
    type: DataTypes.STRING,
  },

  cefr_level: {
    type: DataTypes.INTEGER,
  },
});

Task.hasOne(Listening_task, { foreignKey: "taskID" });
Listening_task.belongsTo(Task, { foreignKey: "taskID" });
