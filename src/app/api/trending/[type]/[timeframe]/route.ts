import axios, { AxiosError } from "axios";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: { type: string; timeframe: string } }
) {
    const { type, timeframe } = params;
    const lang = request.nextUrl.searchParams.get("lang");

    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/trending/${type}/${timeframe}?page=1&language=${lang}&api_key=${process.env.NEXT_API_KEY}`
        );

        return NextResponse.json(response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error;

            return NextResponse.json(
                { error: axiosError.response?.statusText },
                { status: axiosError.response?.status }
            );
        } else {
            return NextResponse.json(
                { error: "Bad Request" },
                { status: 500 }
            );
        }
    }
}
