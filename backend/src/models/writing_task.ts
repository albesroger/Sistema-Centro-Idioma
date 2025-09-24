import sequelize from "@/database/connection";
import { Task } from "./task";

export const Writing_task = sequelize.define("Writing", {});

Task.hasOne(Writing_task, { foreignKey: "taskID" });
Writing_task.belongsTo(Task, { foreignKey: "taskID" });
