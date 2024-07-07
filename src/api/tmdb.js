import axios from "axios";
import {env} from "./variables.js";

axios.defaults.baseURL = env.API_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${env.API_KEY}`;

export async function fetchTrendingMovieList() {
    return await axios.get(env.API_ROUTES.trending_movies);
}

export async function fetchMovieList(query, page = 1) {
    return await axios.get(env.API_ROUTES.search_movie, {params: {query, page}});
}

export async function fetchMovieDetails(movieId) {
    return await axios.get(`${env.API_ROUTES.movie_details}/${movieId}`);
}

export async function fetchMovieCredits(movieId) {
    return await axios.get(`${env.API_ROUTES.movie_credits.replace(":movie_id", movieId)}`);
}

export async function fetchMovieReviews(movieId) {
    return await axios.get(`${env.API_ROUTES.movie_reviews.replace(":movie_id", movieId)}`);
}
