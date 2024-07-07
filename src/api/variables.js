export const env = {
    API_KEY: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjUzODk0Mzk4ZDJkOWZlMzAyMDIwOWZmMWJiZTMzYSIsIm5iZiI6MTcyMDMzODM2NS43NDMxNjMsInN1YiI6IjU2ZWQxNTE1YzNhMzY4MjI2NTAwNWNmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z1Z893BgLBwfxKpr628qB_ys9ddvvmtpUk05yWch_0M',
    API_URL: 'https://api.themoviedb.org/3',
    API_IMAGE_URL: 'https://image.tmdb.org/t/p/w500',
    API_ROUTES: {
        trending_movies: '/trending/movie/day',
        search_movie: '/search/movie',
        movie_details: '/movie',
        movie_credits: '/movie/:movie_id/credits',
        movie_reviews: '/movie/:movie_id/reviews',
    }
};
