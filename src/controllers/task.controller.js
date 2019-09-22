import type from "sequelize";
import Task from '../models/Task';

export async function getTasks(request, response) {
    try {
        const tasks = await Task.findAll({
            attributes: ['id', 'name', 'projectId', 'statusId'],
            logging: logQuery,
            type: type.QueryTypes.SELECT,
        });

        return response.json({
            data: tasks,
        });

    } catch (error) {
        console.error('Error on get all Tasks:', error)

        return response
        .status(500)
        .jason({
            message: "Oops! something went wrong",
            data: {},
        });
    }
}

export async function getTask(request, response) {
    const { id } = request.params;

    try {
        const task = await Task.findOne({
            where: {
                id
            },
            attributes: ['id', 'name', 'projectId', 'statusId'],
            logging: logQuery,
            type: type.QueryTypes.SELECT,
        });

        return response.json(task);

    } catch (error) {
        console.error(`Error on get one Task [id=${id}]`, error)

        return response
        .status(500)
        .json({
            message: "Oops! something went wrong",
            data: {},
        });
    }
}

export async function deleteTask(request, response) {
    const { id } = request.params;

    try {
        const deleteRowCount = await Task.destroy({
            where: {
                id
            },
            logging: logQuery,
            type: type.QueryTypes.SELECT,
        });

        if (deleteRowCount) {
            return response.json({
                message: "Task deleted succesfully",
                count: deleteRowCount,
            });
        }

        return response
        .status(500)
        .json({
            message: "It was not possible to delete the resource",
            count: deleteRowCount,
        });

    } catch (error) {
        console.error(`Error on get one Task [id=${id}]`, error)

        return response
        .status(500)
        .json({
            message: "Oops! something went wrong",
            data: {},
        });
    }
}

export async function updateTask(request, response) {
    const { id } = request.params;

    const { name, statusId, projectId } = request.body;

    const task = await Task.update(
        {
            name,
            statusId,
            projectId,
        },
        {
            where: { id },
            logging: logQuery,
            type: type.QueryTypes.UPDATE,
        }
    );

    console.log(task);
    if (task) {
        return response.json({
            message: 'Task updated Succesfully',
            count: task,
        })
    }

    return response
    .status(500)
    .json({
        message: "Oops! something went wrong",
        data: {},
    });
}


export async function createTask(request, response) {
    console.log('request.body', request.body);

    try {
        let newTask = await create(request.body);

        if (newTask) {
            return response.json({
                message: 'Task Created Succesfully',
                data: newTask
            });
        }
    } catch (error) {
        console.error('Error on Task Creation:', error);

        return response
        .status(500)
        .json({
            message: "Oops! something went wrong",
            data: {},
        });
    }
}

export async function getTasksByProject(request, response) {
    const { projectId } = request.params;

    try {
        const tasks = await Task.findAll({
            where: { projectId : projectId },
            logging: logQuery,
            type: type.QueryTypes.SELECT,
        });

        return response.json({
            data: tasks,
        });

    } catch (error) {
        console.error('Error on get all Tasks:', error)

        return response
        .status(500)
        .jason({
            message: "Oops! something went wrong",
            data: {},
        });
    }
}

async function create(RequestBody) {
    const { name, statusId, projectId } = RequestBody;

    const newTask = await Task.create(
        {
            name,
            statusId,
            projectId,
        },
        {
            fields: ['name', 'statusId', 'projectId'],
            logging: logQuery,
            // plain: true,
            raw: false,
            type: type.QueryTypes.INSERT,
        }
    );

    return newTask;
}

function logQuery(query, modelData) {
    console.log('query',query);
    console.log('modelData.bind',modelData.bind || false);
}
