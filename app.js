const mediaRouter = require("./controller/mediaController");
const middleware = require("./utils/middleware");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());
app.use(morgan("tiny"));

app.use("/api", mediaRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
