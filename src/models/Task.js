import Sequalize from "sequelize";
import { sequelize } from "../database/db";

const Task = sequelize.define( 'task', {
    id: {
        type: Sequalize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequalize.TEXT
    },
    statusId: {
        type: Sequalize.INTEGER
    },
    projectsId: {
        type: Sequalize.INTEGER
    },
    createdAt: {
        type: Sequalize.DATE
    },
    updatedAT: {
        type: Sequalize.DATE
    },
    deletedAt: {
        type: Sequalize.DATE
    },
    bDeleted: {
        type: Sequalize.BOOLEAN
    },
}, {
    timestamps: false,
});

export default Task;












