import { Outlet, NavLink } from "react-router";
import React from "react";

function MoviesLayout() {


    return (
        <>
            <NavLink to=".">
                Trending
            </NavLink>
            <NavLink to="popular">
                Popular
            </NavLink>
            <NavLink to="top_rated">
                Top Rated
            </NavLink>
            <Outlet />
        </>
    )
}

export default MoviesLayout