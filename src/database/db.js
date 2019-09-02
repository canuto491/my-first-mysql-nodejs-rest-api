import Sequelize from "sequelize";

var database_config = {
    name: 'company',
    user: '',
    password: '',
    properties: {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000,
        },
        logging: false,
    }

};


export const sequelize = new Sequelize(
    database_config.name,
    database_config.user,
    database_config.password,
    database_config.properties,
);
