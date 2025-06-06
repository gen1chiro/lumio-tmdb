import {createBrowserRouter, createRoutesFromElements, Outlet, Route} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import MoviesLayout from "../layouts/MoviesLayout.tsx";
import MovieDetail from "../pages/MovieDetail.tsx";
import MovieReviews from "../pages/MovieReviews.tsx";
import TrendingMovies from "../pages/TrendingMovies.tsx";
import PopularMovies from "../pages/PopularMovies.tsx";
import TopRatedMovies from "../pages/TopRatedMovies.tsx";
import { trendingLoader, popularLoader, topRatedLoader, movieDetailLoader } from "../utils/api.ts";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<MainLayout />} />
            <Route path="/movies" element={<MoviesLayout />}>
                <Route index element={<TrendingMovies />} loader={trendingLoader}/>
                <Route path="popular" element={<PopularMovies />} loader={popularLoader}/>
                <Route path="top_rated" element={<TopRatedMovies />} loader={topRatedLoader}/>
                <Route path=":id" id="movie-detail" element={<Outlet />} loader={movieDetailLoader}>
                    <Route index element={<MovieDetail />} />
                    <Route path="reviews" element={<MovieReviews />} />
                </Route>
            </Route>
        </>
    )
)

export default router