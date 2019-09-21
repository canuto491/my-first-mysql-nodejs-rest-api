import Sequelize from "sequelize";

import sequelize from "../database/db";

const Task = sequelize.define('task', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.TEXT
    },
    statusId: {
        type: Sequelize.INTEGER
    },
    projectId: {
        type: Sequelize.INTEGER
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAT: {
        type: Sequelize.DATE
    },
    deletedAt: {
        type: Sequelize.DATE
    },
    bDeleted: {
        type: Sequelize.BOOLEAN
    },
}, {
    timestamps: false,
});

export default Task;












