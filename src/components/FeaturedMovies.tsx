import type {Movie, MovieList} from "../types/types.ts"
import {Link} from "react-router";

function FeaturedMovies({movies}: {movies: MovieList | null}) {
    const {trending, popular, top_rated}: { trending: Movie[], popular: Movie[], top_rated: Movie[] } = movies

    const trendingElements = trending.slice(0, 10).map(({id, poster_path, original_title}) => (
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

    const popularElements = popular.slice(0, 10).map(({id, poster_path, original_title}) => (
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

    const topRatedElements = top_rated.slice(0, 10).map(({id, poster_path, original_title}) => (
        <Link key={id} to={`movies/${id}`} className='flex-shrink-0'>
            {poster_path ?
                <img
                    src={`https://image.tmdb.org/t/p/w342${poster_path}`}
                    alt={original_title}
                    className='aspect-[2/3] w-36 sm:w-48 rounded-lg shadow object-cover'
                /> :
                <div className='aspect-[2/3] bg-gray-100  w-36 sm:w-48 rounded-lg shadow'></div>
            }
        </Link>
    ))

    return (
        <div className='w-full flex flex-col gap-8 items-center p-1 sm:p-4'>
            <div className='w-full bg-white relative'>
                <div className='w-full flex justify-between items-center'>
                    <h1 className='text-3xl font-bold'>Trending</h1>
                    <Link to='/movies' className='hover:underline'>View All</Link>
                </div>
                <div className='flex overflow-x-auto overflow-y-hidden gap-4 py-2 scrollbar-hide'>
                    {trendingElements}
                </div>
                <div
                    className='absolute top-10 right-0 w-8 h-5/6 bg-gradient-to-l from-white to-transparent pointer-events-none'>
                </div>
            </div>
            <div className='w-full bg-white relative'>
                <div className='w-full flex justify-between items-center'>
                    <h1 className='text-3xl font-bold'>Popular</h1>
                    <Link to='/movies/popular' className='hover:underline'>View All</Link>
                </div>
                <div className='flex overflow-x-auto overflow-y-hidden gap-4 py-2 scrollbar-hide'>
                    {popularElements}
                </div>
                <div
                    className='absolute top-10 right-0 w-8 h-5/6 bg-gradient-to-l from-white to-transparent pointer-events-none'>
                </div>
            </div>
            <div className='w-full bg-white relative'>
                <div className='w-full flex justify-between items-center'>
                    <h1 className='text-3xl font-bold'>Top Rated</h1>
                    <Link to='/movies/top_rated' className='hover:underline'>View All</Link>
                </div>
                <div className='flex overflow-x-auto overflow-y-hidden gap-4 py-2 scrollbar-hide'>
                    {topRatedElements}
                </div>
                <div
                    className='absolute top-10 right-0 w-8 h-5/6 bg-gradient-to-l from-white to-transparent pointer-events-none'>
                </div>
            </div>
        </div>
    )
}

export default FeaturedMovies