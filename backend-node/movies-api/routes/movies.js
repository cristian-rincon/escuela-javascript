const express = require('express');
const MoviesService = require('../services/movies');

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);
    const moviesService = new MoviesService();
    // Solicitud base
    router.get('/', async function (req, res, next) {
        const { tags } = req.query;
        try {
            const movies = await moviesService.getMovies({ tags });
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
        const { movieId } = req.params;
        try {
            const movies = await moviesService.getMovie({ movieId });
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
        const { body: movie } = req;
        try {
            const createMovieId = await moviesService.createMovie({ movie });
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
        const { movieId } = req.params;
        const { body: movie } = req;

        try {
            const updatedMovieId = await moviesService.updateMovie({
                movieId,
                movie,
            });
            res.status(200).json({
                data: updatedMovieId,
                message: 'movie updated',
            });
        } catch (error) {
            next(error);
        }
    });
    // Modificar una película
    router.patch('/:movieId', async function (req, res, next) {
        const { movieId } = req.params;
        const { body: movie } = req;

        try {
            const updatedMovieId = await moviesService.updateMovie({
                movieId,
                movie,
            });
            res.status(200).json({
                data: updatedMovieId,
                message: 'movie patched',
            });
        } catch (error) {
            next(error);
        }
    });
    // Eliminar una película
    router.delete('/:movieId', async function (req, res, next) {
        const { movieId } = req.params;
        try {
            const deletedMovieId = await moviesService.deleteMovie({
                movieId,
            });
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
