import css from './MoviesPage.module.css';
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchMovieList} from "../../api/tmdb.js";
import MovieList from "../../components/MovieList/MovieList.jsx";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [params, setParams] = useSearchParams();

    const query = params.get('query') ?? '';

    useEffect(() => {
        if (!query) return;

        setLoading(true);

        fetchMovieList(query)
            .then(({data}) => {
                if (!data.results.length) {
                    setMovies(null);
                    return;
                }

                setMovies(data.results);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
        ;

    }, [query]);

    const handleSearch = (e) => {
        e.preventDefault();

        const form = e.target;
        const query = form.elements.search.value.trim();

        if (!query) return;

        setParams({query: query});
        form.reset();
    }

    return (
        <>
            <form onSubmit={handleSearch} className={css.form}>
                <input
                    type="text"
                    name="search"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                />
                <button type="submit">
                    Search
                </button>
            </form>

            {movies ? (<MovieList movies={movies}/>) : (<div>No movies found</div>)}
        </>
    )
}

export default MoviesPage;