import express, { json } from 'express';
import morgan from 'morgan';

//importing Routes:
import employeeRoutes from './routes/employees';
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

// initialization
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/employees', employeeRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

export default app;
