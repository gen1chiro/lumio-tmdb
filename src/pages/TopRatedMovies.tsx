import { useLoaderData } from "react-router";
import type { Movie } from "../types/types.ts";

function TopRatedMovies() {
    const movies = useLoaderData() as Movie[];

    return (
        <h1>in top rated{console.log(movies)}</h1>
    )
}

export default TopRatedMovies