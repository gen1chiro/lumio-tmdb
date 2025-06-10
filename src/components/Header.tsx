import {Link, NavLink} from "react-router";
import MovieSearch from "./MovieSearch.tsx";

function Header({variation}: {variation: 'main' | 'movie'}) {

    return (
        <>
            <header
                className='w-5/6 sm:w-11/12 max-w-7xl fixed z-50 top-0 left-1/2 -translate-x-1/2 mt-4 py-4 px-6 flex justify-center sm:justify-between bg-white shadow-lg border-gray-100 border rounded-2xl'>
                <nav className='flex items-center gap-6 font-light text-gray-500'>
                    <Link to="/">
                        <svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1"
                             xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                             viewBox="0 0 490 490" xmlSpace="preserve">
                            <g><polygon points="384.643,429.085 105.357,149.797 105.357,0 0,0 0,490 490,490 490,0 384.643,0 	"/></g>
                        </svg>
                    </Link>
                    <NavLink to={variation === 'main' ? 'movies' : '.'} end
                             className={({isActive}) => `hover:text-gray-900 hover:scale-105 transition-all ease-in-out duration-200 ${
                                 isActive ? "font-bold text-black" : "text-gray-600"}`}
                    >
                        Trending
                    </NavLink>
                    <NavLink to={variation === 'main' ? 'movies/popular' : 'popular'}
                             className={({isActive}) => `hover:text-gray-900 hover:scale-105 transition-all ease-in-out duration-200 ${
                                 isActive ? "font-bold text-black " : "text-gray-600"}`}
                    >
                        Popular
                    </NavLink>
                    <NavLink to={variation === 'main' ? 'movies/top_rated' : 'top_rated'}
                             className={({isActive}) => `hover:text-gray-900 hover:scale-105 transition-all ease-in-out duration-200 ${
                                 isActive ? "font-bold text-black" : "text-gray-600"}`}
                    >
                        Top
                    </NavLink>
                </nav>

                {/* desktop search */}
                <div className='hidden sm:block w-60 md:w-80 relative'>
                    <MovieSearch variation={variation}/>
                </div>
            </header>

            {/* mobile search */}
            <div className='sm:hidden w-5/6 relative mx-auto mt-22 p-2 z-50 rounded-xl bg-white shadow-md'>
                <MovieSearch variation={variation}/>
            </div>
        </>
    )
}

export default Header