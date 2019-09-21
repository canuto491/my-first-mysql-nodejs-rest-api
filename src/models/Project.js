import Sequelize from "sequelize";

import sequelize from "../database/db";

import Task from './Task';

const Project = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    deliveryDate: {
        type: Sequelize.DATE
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

Project.hasMany(Task,
    {
        foreingKey: 'projectId',
        sourceKey: 'id',
    }
);

Task.belongsTo(Project,
    {
        foreingKey: 'projectId',
        sourceKey: 'id',
    }
);


export default Project;
