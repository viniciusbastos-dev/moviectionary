import axios from "axios";

const region = navigator.language;

export const getTrending = (timeFrame: string) => {
    return axios
        .get(`/api/trending/all/${timeFrame}/?lang=${region}`)
        .then((response) => response.data);
};

export const getMediaInfo = (type: string, id: string) => {
    return axios
        .get(`/api/info/${type}/${id}/?lang=${region}`)
        .then((response) => response.data);
};
