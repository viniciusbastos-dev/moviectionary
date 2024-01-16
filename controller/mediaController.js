const mediaRouter = require("express").Router();
const Media = require("../models/media");
const axios = require("axios");
const config = require("../utils/config");

const baseURL = "https://api.themoviedb.org/3";

mediaRouter.get("/trending/:category/:timeframe", (request, response, next) => {
    const { category, timeframe } = request.params;
    const { lang = "en-US", page = 1 } = request.query;

    axios
        .get(
            `${baseURL}/trending/${category}/${timeframe}?page=${page}&language=${lang}&api_key=${config.API_KEY}`
        )
        .then((response) => response.data.results)
        .then((medias) => medias.map((media) => Media.format(media, lang)))
        .then((formattedMedia) => response.json(formattedMedia))
        .catch((error) => next(error));
});

mediaRouter.get("/info/:category/:id", (request, response, next) => {
    const { category, id } = request.params;
    const { lang = "en-US" } = request.params;

    axios
        .get(
            `${baseURL}/${category}/${id}?language=${lang}&append_to_response=${
                category === "tv" ? "aggregate_credits" : "credits"
            }&api_key=${config.API_KEY}`
        )
        .then((response) => Media.format(response.data))
        .then((formattedMedia) => response.json(formattedMedia))
        .catch((error) => next(error));
});

module.exports = mediaRouter;
