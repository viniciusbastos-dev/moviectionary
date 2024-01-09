const logger = require("./logger");

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: `Unknown endpoint ${req.url}` });
};

const errorHandler = (error, req, res, next) => {
    logger.error(error.response);
    if (error.response) {
        if (error.response.status === 400) {
            res.status(400).json({ error: error.response.data.status_message });
        }
    }
    next(error);
};

module.exports = {
    unknownEndpoint,
    errorHandler,
};
