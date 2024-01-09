const baseURL = "https://image.tmdb.org/t/p/original";

class Media {
    constructor(
        backdrop_path,
        poster_path,
        media_type,
        overview,
        id,
        title,
        vote_percentage,
        release_date
    ) {
        this.id = id;
        this.title = title;
        this.overview = overview;
        this.media_type = media_type;
        this.release_date = release_date;
        this.vote_percentage = vote_percentage;
        this.backdrop_url = baseURL + backdrop_path;
        this.poster_url = baseURL + poster_path;
    }
}

const format = (mediaDetails, lang) => {
    const { backdrop_path, poster_path, id, overview, media_type } =
        mediaDetails;

    const title = mediaDetails.title || mediaDetails.name;
    const vote_percentage = mediaDetails.vote_average * 10;

    const date = new Date(
        `${
            mediaDetails.release_date ?? mediaDetails.first_air_date
        }T12:30:00-00:00`
    );
    const options = {
        day: "2-digit",
        month: "long",
        year: "numeric",
    };
    
    const release_date = date.toLocaleDateString(lang, options);

    const media = new Media(
        backdrop_path,
        poster_path,
        media_type,
        overview,
        id,
        title,
        vote_percentage,
        release_date
    );

    return media;
};

module.exports = {
    format,
};
