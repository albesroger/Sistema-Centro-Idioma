import sequelize from "@/database/connection";
import { Task } from "./task";

export const Reading_task = sequelize.define("Reading", {});

Task.hasOne(Reading_task, { foreignKey: "taskID" });
Reading_task.belongsTo(Task, { foreignKey: "taskID" });
