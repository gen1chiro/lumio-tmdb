import { useLoaderData } from "react-router";
import CategoryMovieTile from "../components/CategoryMovieTile.tsx";
import type { Movie } from "../types/types.ts";

function Movies() {
    const movies = useLoaderData() as Movie[];

    const movieElements = movies.map(movie => {
        return (
            <CategoryMovieTile key={movie.id} movie={movie}/>
        )
    })

    return (
        <main className='pt-4 sm:pt-24 w-11/12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mb-10'>
            {movieElements.length > 0 ?
                movieElements :
                <div className='w-full col-span-full bg-white dark:bg-zinc-800 rounded-xl shadow-lg h-96 mb-10 flex items-center justify-center font-light text-gray-600 dark:text-gray-200 border border-white dark:border-zinc-700'>No results</div>
            }
        </main>
    )
}

export default Movies