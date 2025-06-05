import { useLoaderData } from "react-router";
import CategoryMovieTile from "../components/CategoryMovieTile.tsx";
import type { Movie } from "../types/types.ts";

function PopularMovies() {
    const movies = useLoaderData() as Movie[];

    const movieElements = movies.map(movie => {
        return (
            <CategoryMovieTile key={movie.id} movie={movie}/>
        )
    })

    return (
        <>
            <h1>in popular{console.log(movies)}</h1>
            {movieElements}
        </>
    )
}

export default PopularMovies