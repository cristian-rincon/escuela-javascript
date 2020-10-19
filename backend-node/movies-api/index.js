const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');

const {
    logErrors,
    errorHandler,
    wrapErrors,
} = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// body parser
app.use(express.json());

moviesApi(app);
// Catch 404
app.use(notFoundHandler);

//Error middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
    // eslint-disable-next-line no-console
    console.log(`Listening http://localhost:${config.port}`);
});
