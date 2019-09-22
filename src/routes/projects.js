import { Router } from 'express';
const router = Router();

import { createProject, getProjects, getProject, deleteProject, updateProject} from '../controllers/project.controller'

// api/projects/
router.get('/', getProjects);

router.get('/:id', getProject);

router.post('/', createProject);

router.delete('/:id', deleteProject);

router.put('/:id', updateProject);


export default router
