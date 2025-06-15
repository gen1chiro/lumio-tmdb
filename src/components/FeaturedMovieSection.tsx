import type {Movie} from "../types/types.ts"
import {Link} from "react-router";

function FeaturedMovieSection({movies, link, label}: {movies: Movie[], link: string, label: string}) {

    const movieElements = movies.slice(0, 10).map(({id, poster_path, original_title}) => (
        <Link key={id} to={`movies/${id}`} className='flex-shrink-0'>
            {poster_path ?
                <img
                    src={`https://image.tmdb.org/t/p/w342${poster_path}`}
                    alt={original_title}
                    className='aspect-[2/3] w-36 sm:w-48 rounded-lg shadow object-cover'
                /> :
                <div className='aspect-[2/3] bg-gray-100 w-36 sm:w-48 rounded-lg shadow'></div>
            }
        </Link>
    ))

    return (
        <div className='w-full bg-white dark:bg-zinc-800 relative'>
            <div className='w-full flex justify-between items-center'>
                <h1 className='text-3xl font-bold dark:text-gray-200'>{label}</h1>
                <Link to={link} className='hover:underline dark:text-gray-200'>View All</Link>
            </div>
            <div className='flex overflow-x-auto overflow-y-hidden gap-4 py-2 scrollbar-hide'>
                {movieElements}
            </div>
            <div
                className='absolute top-10 right-0 w-8 h-5/6 bg-gradient-to-l from-white dark:from-zinc-800 to-transparent pointer-events-none'>
            </div>
        </div>
    )
}

export default FeaturedMovieSection