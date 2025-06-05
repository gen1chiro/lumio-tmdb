import { useLoaderData } from "react-router";
import type { Movie } from "../types/types.ts";
import CategoryMovieTile from "../components/CategoryMovieTile.tsx";

function TopRatedMovies() {
    const movies = useLoaderData() as Movie[];

    const movieElements = movies.map(movie => {
        return (
            <CategoryMovieTile key={movie.id} movie={movie}/>
        )
    })

    return (
        <div>
            <h1>in top rated{console.log(movies)}</h1>
            {movieElements}
        </div>
    )
}

export default TopRatedMovies