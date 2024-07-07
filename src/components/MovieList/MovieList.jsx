import css from './MovieList.module.css';
import {Link, useLocation} from "react-router-dom";
import {env} from "../../api/variables.js";

const MovieList = ({movies}) => {
    const location = useLocation();

    return (
        <ul className={css.list}>
            {movies.map(({id, title, poster_path}) => (
                <li key={id}>
                    <Link to={`/movies/${id}`} state={location} className={css.movie}>
                        <img src={ poster_path ? `${env.API_IMAGE_URL}${poster_path}` : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'} alt={title}/>
                        <h3>{title}</h3>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default MovieList;