import { Router } from 'express';
const router = Router();

router.get('/', (req, resp) => {
    console.log('get all => tasks');
    resp.send('lista de tareas');
});

router.get('/:id', (req, resp) => {
    const { id } = req.params;
    console.log('get one => task with id', id);
    resp.send('recibido');
});

router.post('/', (req, resp) => {
    const id = null;
    const { name, salary } = req.body;
    resp.send('guardando tarea', req.body);
});


router.put('/:id', (req, resp) => {
    const { id } = req.params;
    resp.send('actualizando tarea con id', {id: id, data: req.body});

});

router.delete('/:id', (req, resp) => {
    const { id } = req.params;
    resp.send('borrando tarea con id', id);
});

export default router
