import axios from "axios";

export const getInfo = async (type: string, id: string) => {
    const res = await axios.get(
        `https://moviectionary.vercel.app/api/info/${type}/${id}`
    );
    return res.data;
};
