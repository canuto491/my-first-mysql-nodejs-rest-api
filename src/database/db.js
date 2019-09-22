import Sequelize from "sequelize";

const debugMode = false;

const sequelize = new Sequelize(
    'company', // db name,
    'root', // username
    '', // password
    {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        logging: debugMode
    }
);

if (debugMode) {
    sequelize.sync({ logging: console.log });
}

sequelize
  .authenticate()
  .then(() => {
    console.log('sequelize > Connection has been established successfully.');
  })
  .catch(err => {
    console.error('sequelize > Unable to connect to the database:', err);
  });

export default sequelize;
