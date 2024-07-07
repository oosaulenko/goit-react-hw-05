import {lazy, Suspense, useState} from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./components/MovieReviews/MovieReviews"));
const Navigation = lazy(() => import("./components/Navigation/Navigation"));

function App() {
    return (
        <>
            <Navigation/>

            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/movies" element={<MoviesPage/>}/>
                    <Route path="/movies/:movieId" element={<MovieDetailsPage/>}>
                        <Route path="cast" element={<MovieCast/>}/>
                        <Route path="reviews" element={<MovieReviews/>}/>
                    </Route>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </Suspense>
        </>
    )
}

export default App
