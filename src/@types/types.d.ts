export interface Media {
    id: number;
    title: string;
    overview: string;
    media_type: string;
    release_date: string;
    backdrop_url: string;
    poster_url: string;
    vote_percentage: string;
    original_name: string;
}

type Genre = {
    id: number;
    name: string;
};

type Cast = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
    profile_url: string;
};

export interface MediaDetails {
    id: number;
    title: string;
    overview: string;
    backdrop_url: string;
    poster_url: string;
    vote_percentage: string;
    runtime: number;
    revenue: number;
    release_date: string;
    genres: Genre[];
    tagline: string;
    casting: Cast[];
}
