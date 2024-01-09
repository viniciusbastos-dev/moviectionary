const mediaRouter = require("express").Router();
const Media = require("../models/media");
const axios = require("axios");
const config = require("../utils/config");

const baseURL = "https://api.themoviedb.org/3";

mediaRouter.get("/trending/:category/:timeframe", (req, res, next) => {
    const { category, timeframe } = req.params;
    const { lang = "en-US", page = 1 } = req.query;

    axios
        .get(
            `${baseURL}/trending/${category}/${timeframe}?page=${page}&language=${lang}&api_key=${config.API_KEY}`
        )
        .then((response) => response.data.results)
        .then((medias) => medias.map((media) => Media.format(media, lang)))
        .then((formattedMedia) => res.json(formattedMedia))
        .catch((error) => next(error));
});

module.exports = mediaRouter;
