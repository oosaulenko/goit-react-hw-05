import css from './MovieCast.module.css';
import {useEffect, useState} from "react";
import {fetchMovieCredits} from "../../api/tmdb.js";
import {useParams} from "react-router-dom";

import {env} from "../../api/variables.js";

const MovieCast = () => {
    const {movieId} = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetchMovieCredits(movieId)
            .then(({data}) => setCast(data.cast))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
        ;
    }, [movieId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!cast.length) {
        return <div>No cast available</div>;
    }

    return (
        <ul className={css.list}>
            {cast.map((actor) => {
                return (
                    <li key={actor.id}>
                        <img
                            src={ actor.profile_path ? `${env.API_IMAGE_URL}${actor.profile_path}` : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'}
                            alt={actor.name}
                        />
                        <h4 className={css.title}>
                            {actor.name} - {actor.character}
                        </h4>
                    </li>
                );
            })}
        </ul>
    )
}

export default MovieCast;