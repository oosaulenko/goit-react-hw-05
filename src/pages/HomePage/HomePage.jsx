import css from './HomePage.module.css';
import {fetchTrendingMovieList} from "../../api/tmdb.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import {useEffect, useState} from "react";

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendingMovieList().then(({data}) => setMovies(data.results));
    }, []);

    return (
        <>
            <h1>Trending today</h1>
            <MovieList movies={movies}/>
        </>
    )
}

export default HomePage;