"use client";

import { MediaDetails } from "@/@types/types";
import InfoBanner from "@/components/InfoBanner";
import { getInfo } from "@/services/request";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Info = () => {
    const params = useParams<{ type: string; id: string }>();
    
    const [info, setInfo] = useState<MediaDetails>();
    useEffect(() => {
        getInfo(params.type, params.id).then((response) => setInfo(response));
    }, [params]);

    if (!info) return;

    return (
        <>
            <InfoBanner data={info} />
        </>
    );
};

export default Info;
