import { useLoaderData } from "react-router";
import type { Movie } from "../types/types.ts";

function PopularMovies() {
    const movies = useLoaderData() as Movie[];

    return (
        <h1>in popular{console.log(movies)}</h1>
    )
}

export default PopularMovies