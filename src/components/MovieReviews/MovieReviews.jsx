import css from './MovieReviews.module.css';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchMovieReviews} from "../../api/tmdb.js";

const MovieReviews = () => {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchMovieReviews(movieId)
            .then(({data}) => setReviews(data.results.slice(0, 10)))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
        ;
    }, [movieId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!reviews.length) {
        return <div>No reviews available</div>;
    }

    return (
        <ul className={css.list}>
            {reviews.map((review) => {
                return (
                    <li key={review.id} className={css.review}>
                        <h4 className={css.author}>Author: {review.author}</h4>
                        <p className={css.comment}>{review.content}</p>
                    </li>
                );
            })}
        </ul>
    )
}

export default MovieReviews;