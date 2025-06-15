import {Link, NavLink} from "react-router"
import MovieSearch from "./MovieSearch.tsx"
import ThemeToggle from "./ThemeToggle.tsx";

function Header({variation}: {variation: 'main' | 'movie'}) {

    return (
        <>
            <header
                className='w-11/12 max-w-7xl fixed z-50 top-0 left-1/2 -translate-x-1/2 mt-4 py-4 px-6 flex justify-center sm:justify-between bg-white dark:bg-zinc-800 shadow-lg border-gray-100 dark:border-zinc-700 border rounded-2xl'>
                <nav className='flex items-center gap-6 font-light text-gray-500'>
                    <Link to="/">
                        <svg className='fill-black dark:fill-white' height="20px" width="20px" version="1.1" id="Capa_1"
                             xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                             viewBox="0 0 490 490" xmlSpace="preserve">
                            <g><polygon points="384.643,429.085 105.357,149.797 105.357,0 0,0 0,490 490,490 490,0 384.643,0 	"/></g>
                        </svg>
                    </Link>
                    <NavLink to={variation === 'main' ? 'movies' : '.'} end
                             className={({isActive}) => `hover:text-gray-900 hover:dark:text-white hover:scale-105 transition-all ease-in-out duration-200 ${
                                 isActive ? "font-bold text-black dark:text-white" : "text-gray-500 dark:text-gray-200"}`}
                    >
                        Trending
                    </NavLink>
                    <NavLink to={variation === 'main' ? 'movies/popular' : 'popular'}
                             className={({isActive}) => `hover:text-gray-900 hover:dark:text-white hover:scale-105 transition-all ease-in-out duration-200 ${
                                 isActive ? "font-bold text-black dark:text-white" : "text-gray-500 dark:text-gray-200"}`}
                    >
                        Popular
                    </NavLink>
                    <NavLink to={variation === 'main' ? 'movies/top_rated' : 'top_rated'}
                             className={({isActive}) => `hover:text-gray-900 hover:dark:text-white hover:scale-105 transition-all ease-in-out duration-200 ${
                                 isActive ? "font-bold text-black dark:text-white" : "text-gray-500 dark:text-gray-200"}`}
                    >
                        Top
                    </NavLink>
                    <div className='h-full flex items-center sm:hidden'>
                        <ThemeToggle />
                    </div>
                </nav>

                {/* desktop search */}
                <div className='hidden sm:flex w-60 md:w-80 sm:items-center gap-4'>
                    <MovieSearch variation={variation}/>
                    <ThemeToggle />
                </div>
            </header>

            {/* mobile search */}
            <div className='sm:hidden w-11/12 mx-auto mt-22 p-2 z-40 rounded-xl bg-white dark:bg-zinc-800 border border-white dark:border-zinc-700 shadow-md'>
                <MovieSearch variation={variation}/>
            </div>
        </>
    )
}

export default Header