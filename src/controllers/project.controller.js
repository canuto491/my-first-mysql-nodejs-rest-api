import type from "sequelize";
import Project from '../models/Project';

export async function createProject(request, response) {
    console.log('request.body', request.body);
    const { name, priority, description, deliveryDate } = request.body;

    let newProject = await Project.create(
        {
            name,
            priority,
            description,
            deliveryDate
        },
        {
            logging: logQuery,
            // plain: true,
            raw: false,
            type: type.QueryTypes.INSERT,
        }
    );

    if (newProject) {
        response.json({
            message: 'Project Created Succesfully',
            data: newProject
        });

        return;
    }
    response.send('received');
}


function logQuery(query, modelData) {
    console.log('query',query);
    console.log('modelData.bind',modelData.bind);
}
