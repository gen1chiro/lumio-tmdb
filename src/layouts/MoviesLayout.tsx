import {Outlet, NavLink, Link} from "react-router";
import React from "react";

function MoviesLayout() {

    return (
        <>
            <header
                className='w-5/6 sm:w-11/12 max-w-7xl fixed z-50 top-0 left-1/2 -translate-x-1/2 mt-4 py-4 px-6 flex justify-center sm:justify-start bg-black/10 backdrop-blur-md border border-white/20 rounded-2xl'>
                <nav className='flex items-center gap-6 font-light text-gray-500'>
                    <Link to="/">
                        <svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1"
                             xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                             viewBox="0 0 490 490" xmlSpace="preserve">
                        <g><polygon points="384.643,429.085 105.357,149.797 105.357,0 0,0 0,490 490,490 490,0 384.643,0 	"/></g>
                        </svg>
                    </Link>
                    <NavLink to="." end
                             className={({isActive}) => `hover:text-gray-900 hover:scale-105 transition-all ease-in-out duration-200 ${
                                 isActive ? "font-bold text-black" : "text-gray-600"}`}
                    >
                        Trending
                    </NavLink>
                    <NavLink to="popular"
                             className={({ isActive }) => `hover:text-gray-900 hover:scale-105 transition-all ease-in-out duration-200 ${
                                 isActive ? "font-bold text-black " : "text-gray-600"}`}
                    >
                        Popular
                    </NavLink>
                    <NavLink to="top_rated"
                             className={({ isActive }) => `hover:text-gray-900 hover:scale-105 transition-all ease-in-out duration-200 ${
                                 isActive ? "font-bold text-black" : "text-gray-600"}`}
                    >
                        Top
                    </NavLink>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}

export default MoviesLayout