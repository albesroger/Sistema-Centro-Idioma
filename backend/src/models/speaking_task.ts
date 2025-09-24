import sequelize from "@/database/connection";
import { Task } from "./task";

export const Speaking_task = sequelize.define("Speaking", {});

Task.hasOne(Speaking_task, { foreignKey: "taskID" });
Speaking_task.belongsTo(Task, { foreignKey: "taskID" });
