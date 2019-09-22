import type from "sequelize";
import Project from '../models/Project';

export async function getProjects(request, response) {
    try {
        const projects = await Project.findAll({
            logging: logQuery,
            type: type.QueryTypes.SELECT,
        });

        return response.json({
            data: projects,
        });

    } catch (error) {
        console.error('Error on get all Projects:', error)

        return response
        .status(500)
        .jason({
            message: "Oops! something went wrong",
            data: {},
        });
    }
}

export async function getProject(request, response) {
    const { id } = request.params;

    try {
        const project = await Project.findOne({
            where: {
                id
            },
            logging: logQuery,
            type: type.QueryTypes.SELECT,
        });

        return response.json(project);

    } catch (error) {
        console.error(`Error on get one Project [id=${id}]`, error)

        return response
        .status(500)
        .json({
            message: "Oops! something went wrong",
            data: {},
        });
    }
}

export async function deleteProject(request, response) {
    const { id } = request.params;

    try {
        const deleteRowCount = await Project.destroy({
            where: {
                id
            },
            logging: logQuery,
            type: type.QueryTypes.SELECT,
        });

        if (deleteRowCount) {
            return response.json({
                message: "Project deleted succesfully",
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
        console.error(`Error on get one Project [id=${id}]`, error)

        return response
        .status(500)
        .json({
            message: "Oops! something went wrong",
            data: {},
        });
    }
}

export async function updateProject(request, response) {
    const { id } = request.params;
    const { name, priority, description, deliveryDate } = request.body;

    const project = await Project.update(
        {
            name,
            priority,
            description,
            deliveryDate,
        },
        {
            where: { id },
            logging: logQuery,
            type: type.QueryTypes.UPDATE,
        }
    );

    console.log(project);
    if (project) {
        return response.json({
            message: 'Project updated Succesfully',
            count: project,
        })
    }

    return response
    .status(500)
    .json({
        message: "Oops! something went wrong",
        data: {},
    });
}


export async function createProject(request, response) {
    console.log('request.body', request.body);

    try {
        let newProject = await create(request.body);

        if (newProject) {
            return response.json({
                message: 'Project Created Succesfully',
                data: newProject
            });
        }
    } catch (error) {
        console.error('Error on Project Creation:', error);

        return response
        .status(500)
        .json({
            message: "Oops! something went wrong",
            data: {},
        });
    }
}

async function create(RequestBody) {
    const { name, priority, description, deliveryDate } = RequestBody;

    const newProject = await Project.create(
        {
            name,
            priority,
            description,
            deliveryDate
        },
        {
            fields: ['name', 'priority', 'description', 'deliveryDate'],
            logging: logQuery,
            // plain: true,
            raw: false,
            type: type.QueryTypes.INSERT,
        }
    );

    return newProject;
}

function logQuery(query, modelData) {
    console.log('query',query);
    console.log('modelData.bind',modelData.bind);
}
