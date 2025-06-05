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
        <main
            className='pt-16 w-5/6 sm:w-11/12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1'>
            {movieElements}
        </main>
    )
}

export default TopRatedMovies