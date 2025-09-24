import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";

export const Task = sequelize.define("Task", {
  //Identificación
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },

  taskID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },

  name_of_item_writer: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  team: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  //Tema y Contenido
  main_topic_area: {
    type: DataTypes.STRING,
  },

  nature_of_content: {
    type: DataTypes.STRING,
  },

  vocabulary: {
    type: DataTypes.STRING,
  },

  grammar: {
    type: DataTypes.STRING,
  },

  //Nivel y Tiempo
  time_to_do_total_task: {
    type: DataTypes.INTEGER, //in minutes
  },

  task_level_estimated: {
    type: DataTypes.STRING,
  },

  //Resultados Esperados
  expected_outcomes: {
    type: DataTypes.STRING,
  },

  //Comentarios
  comments: {
    type: DataTypes.STRING,
  },

  //Feedback
  feedback_provided_by: {
    type: DataTypes.STRING,
  },

  feedback_date: {
    type: DataTypes.DATE,
  },

  feedback_team: {
    type: DataTypes.STRING,
  },
});
