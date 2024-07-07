import css from './MovieDetailsPage.module.css';
import {useEffect, useState} from "react";
import {Link, NavLink, Outlet, useLocation, useParams} from "react-router-dom";
import {fetchMovieDetails} from "../../api/tmdb.js";
import {env} from "../../api/variables.js";

const classNames = ({isActive}) => {
    return `${css.link} ${isActive ? css.active : ''}`;
};

const MovieDetailsPage = () => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation();
    const backLinkHref = location.state ?? '/movies';


    useEffect(() => {
        setError(null);
        fetchMovieDetails(movieId)
            .then(({data}) => {
                setMovie(data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => setLoading(false))
        ;
    }, [movieId]);

    if (error) {
        return <h1>{error.message}</h1>;
    }

    if (!movie) {
        return <h1>Loading...</h1>;
    }

    const releaseYear = new Date(movie.release_date).getFullYear();


    return (
        <article className={css.movie}>
            <Link to={backLinkHref} className={css.button}>Go back</Link>
            <div className={css.header}>
                <div className={css.image}>
                    <img
                        src={movie.poster_path ? `${env.API_IMAGE_URL}${movie.poster_path}` : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'}
                        alt={movie.title}/>
                </div>
                <div className={css.content}>
                    <h1>{movie.title} ({releaseYear})</h1>
                    <p>User score: {movie.vote_average}%</p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    <div className={css.genres}>
                        {movie.genres.map(({id, name}) => {
                            return <span key={id}>{name} </span>
                        })}
                    </div>
                </div>
            </div>

            <h3>Additional information</h3>
            <ul className={css.additional}>
                <li>
                    <NavLink to="cast" className={classNames} state={location.state}>
                        Cast
                    </NavLink>
                </li>
                <li>
                    <NavLink to="reviews" className={classNames} state={location.state}>
                        Reviews
                    </NavLink>
                </li>
            </ul>
            <Outlet/>


        </article>
    )
}

export default MovieDetailsPage;