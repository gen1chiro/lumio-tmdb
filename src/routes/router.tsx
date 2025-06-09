import {createBrowserRouter, createRoutesFromElements, Outlet, Route} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import MoviesLayout from "../layouts/MoviesLayout.tsx";
import MovieDetail from "../pages/MovieDetail.tsx";
import MovieReviews from "../pages/MovieReviews.tsx";
import Movies from "../pages/Movies.tsx";
import { trendingLoader, popularLoader, topRatedLoader, movieDetailLoader, searchMovieLoader } from "../utils/api.ts";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<MainLayout />} />
            <Route path="/movies" element={<MoviesLayout />}>
                <Route index element={<Movies />} loader={trendingLoader}/>
                <Route path="popular" element={<Movies />} loader={popularLoader}/>
                <Route path="top_rated" element={<Movies />} loader={topRatedLoader}/>
                <Route path="search/:query" element={<Movies />} loader={searchMovieLoader}/>
                <Route path=":id" id="movie-detail" element={<Outlet />} loader={movieDetailLoader}>
                    <Route index element={<MovieDetail />} />
                    <Route path="reviews" element={<MovieReviews />} />
                </Route>
            </Route>
        </>
    )
)

export default router