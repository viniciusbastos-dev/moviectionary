const baseURL = "https://image.tmdb.org/t/p/original";

const format = (mediaDetails, lang) => {
    const {
        backdrop_path,
        poster_path,
        id,
        overview,
        media_type,
        genres,
        original_name,
        tagline,
        revenue,
        runtime,
    } = mediaDetails;

    const title = mediaDetails.title || mediaDetails.name;
    const vote_percentage = (mediaDetails.vote_average * 10).toFixed(2);
    const credits = mediaDetails.credits || mediaDetails.aggregate_credits;

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

    const formatPersonProfile = (person) => {
        const profile_url = baseURL + person.profile_path;
        delete person.profile_path;
        const newCredit = { ...person, profile_url };
        return newCredit;
    };

    let created_by;

    if (mediaDetails.created_by) {
        created_by = mediaDetails.created_by.map((person) =>
            formatPersonProfile(person)
        );
    }

    let casting;

    if (credits) {
        casting = credits.cast.map((person) => formatPersonProfile(person));
    }

    const media = {
        id,
        title,
        overview,
        backdrop_url: baseURL + backdrop_path,
        poster_url: baseURL + poster_path,
        vote_percentage,
        media_type,
        runtime,
        revenue,
        release_date,
        genres,
        created_by,
        original_name,
        tagline,
        casting,
    };

    return media;
};

module.exports = {
    format,
};
