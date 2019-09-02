import Sequalize from "sequelize";
import { sequelize } from "../database/db";
import Task from './Task';

const Project = sequelize.define( 'projects', {
    id: {
        type: Sequalize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequalize.TEXT
    },
    priority: {
        type: Sequalize.INTEGER
    },
    description: {
        type: Sequalize.TEXT
    },
    deliveryDate: {
        type: Sequalize.DATE
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

Project.hasMany(Task,
    {
        foreingKey: projectId,
        sourceKey: id,
    }
);

Task.belongsTo(Project,
    {
        foreingKey: projectId,
        sourceKey: id,
    }
);
export default Project;
