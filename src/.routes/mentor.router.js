const express = require('express');

const mentorUsecase = require('../usescase/mentor.usecase');

const router = express.Router();

router.get = ('/', async (request, response) => {
    try {
        const mentor = await mentorUsecase.getAll();
        response.json({
            success: true,
            data: { mentor },
        })
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        });
    }
})

router.post('/', async (request, response) => {
    try {
        const mentorCreated = await mentorUsecase.getAll();
        response.json({
            success: true,
            data: { mentor: mentorCreated },
        })
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        });
    }
})
router.get('/:id', async (request, response) => {
    try {
        const id = request.params.id;
        const mentor = await mentorUsecase.getById(id);
        response.json({
            success: true,
            data: { mentor },
        })
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        });
    }
})
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const mentorDeleted = await mentorUsecase.deleteById(id);

        response.json({
            success: true,
            data: { mentor: mentorDeleted },
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        });
    }
});

router.patch('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const mentorUpdated = await mentorUsecase.updateById(id, request.body);
        response.json({
            success: true,
            data: { mentor: mentorUpdated },
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