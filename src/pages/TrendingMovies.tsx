import { useLoaderData } from "react-router";
import type { Movie } from "../types/types.ts";

function TrendingMovies() {
    const movies = useLoaderData() as Movie[];

    return (
        <h1>in trending{console.log(movies)}</h1>
    )
}

export default TrendingMovies