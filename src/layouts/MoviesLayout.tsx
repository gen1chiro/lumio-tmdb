import {Outlet, NavLink} from "react-router";
import React from "react";

function MoviesLayout() {

    return (
        <>
            <header
                className='w-5/6 sm:w-11/12 max-w-7xl fixed top-0 left-1/2 -translate-x-1/2 p-4 flex justify-center sm:justify-start bg-black/10 backdrop-blur-md border border-white/20 rounded-2xl'>
                <nav className='flex gap-6 font-light text-gray-500 '>
                    <NavLink to="." end
                             className={({ isActive }) => `hover:text-gray-900 hover:scale-105 transition-all ease-in-out duration-200 ${
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
                        Top Rated
                    </NavLink>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}

export default MoviesLayout