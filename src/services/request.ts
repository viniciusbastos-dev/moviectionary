import axios from "axios";

export const getTrending = async (timeframe: string) => {
    const res = await axios.get(
        `https://moviectionary.vercel.app/api/trending/all/${timeframe}?lang=pt-BR`
    );

    return res.data;
};

export const getInfo = async (type: string, id: string) => {
    const res = await axios.get(
        `https://moviectionary.vercel.app/api/info/${type}/${id}?lang=pt-BR`
    );
    return res.data;
};
