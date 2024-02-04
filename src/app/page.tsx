import React from "react";
import Banner from "@/components/Banner";
import { Media } from "@/@types/types";
import Carousel from "@/components/Carousel";

async function getData(): Promise<Media[]> {
    const res = await fetch(
        `https://moviectionary.vercel.app/api/trending/all/day?lang=pt-BR`
    );
    const data = await res.json();
    return data;
}

export default async function Home() {
    const data = await getData();
    const topTrending = data[0];
    return (
        <>
            <Banner data={topTrending} />
            <Carousel data={data}/>
        </>
    );
}
