import { Router } from 'express';
const router = Router();

import { createProject } from '../controllers/project.controller'

// api/projects/
router.get('/', (req, resp) => {
    console.log('get all => tasks');
    resp.send('lista de tareas');
});

router.get('/:id', (req, resp) => {
    const { id } = req.params;
    console.log('get one => task with id', id);
    resp.send('recebido');
});

router.post('/', createProject);


router.put('/:id', (req, resp) => {
    const { id } = req.params;
    resp.send('actualizando tarea con id', {id: id, data: req.body});

});

router.delete('/:id', (req, resp) => {
    const { id } = req.params;
    resp.send('borrando tarea con id', id);
});

export default router
