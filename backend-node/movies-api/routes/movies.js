const express = require('express');
const { moviesMock } = require('../utils/mocks/movies_sample.js');

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);
    // Solicitud base
    router.get('/', async function (req, res, next) {
        try {
            const movies = await Promise.resolve(moviesMock);
            res.status(200).json({
                data: movies,
                message: 'movies listed',
            });
        } catch (error) {
            next(error);
        }
    });
    // Obtener una película por su id
    router.get('/:movieId', async function (req, res, next) {
        try {
            const movies = await Promise.resolve(moviesMock[0]);
            res.status(200).json({
                data: movies,
                message: 'movies retrieved',
            });
        } catch (error) {
            next(error);
        }
    });
    // Agregar una película
    router.post('/', async function (req, res, next) {
        try {
            const createMovieId = await Promise.resolve(moviesMock[1].id);
            res.status(201).json({
                data: createMovieId,
                message: 'movies created',
            });
        } catch (error) {
            next(error);
        }
    });
    // Modificar una película
    router.put('/:movieId', async function (req, res, next) {
        try {
            const updatedMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(200).json({
                data: updatedMovieId,
                message: 'movie updated',
            });
        } catch (error) {
            next(error);
        }
    });
    // Eliminar una película
    router.delete('/:movieId', async function (req, res, next) {
        try {
            const deletedMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(200).json({
                data: deletedMovieId,
                message: 'movie deleted',
            });
        } catch (error) {
            next(error);
        }
    });
}

module.exports = moviesApi;
