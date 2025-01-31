const express = require('express');

const kodersUsecase = require ('../usescase/koders.usecase');


const router = express.Router();
// GET /koder
router.get('/', async (request, response) => {
    try {
        const koders = await kodersUsecase.getAll();
        response.json({
            success: true,
            data: {koders},
        })

    } catch(error){
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        });
    }
    
});

router.post('/', async (request, response) => {
    try{
        const koderCreated = await kodersUsecase.create(request.body);
        response.json ({
            success: true,
            data: {koder: koderCreated},
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        });
    }
});

router.get('/:id', async (request, response) => {
    try{
        const id = request.params.id;
        const koder = await kodersUsecase.getById(id);
        response.json({
            success: true,
            data: {koder},
        })

    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        });
    }
});

router.delete('/:id', async (request, response) => {
    try{
        const {id} = request.params;
        const koderDeleted = await kodersUsecase.deleteById(id);

        response.json({
            success: true,
            data: {koder: koderDeleted},
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        });
    }
});

router.patch('/:id', async (request, response) =>{
    try{
        const {id} = request.params;
        const kodersUpdated = await kodersUsecase.updateById(id, request.body);
        response.json({
            success: true,
            data: {koder: kodersUpdated},
        })
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        });
    }    
});


module.exports = router;

