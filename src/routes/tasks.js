import { Router } from 'express';
const router = Router();

import { getTasks, getTask, deleteTask, updateTask, createTask, getTasksByProject} from '../controllers/task.controller'

router.get('/', getTasks);

router.get('/:id', getTask);

router.post('/', createTask);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask);

router.get('/project/:projectId', getTasksByProject);

export default router;


