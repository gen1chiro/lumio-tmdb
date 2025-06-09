import React from "react";
import { Outlet } from "react-router";
import MovieHeader from "../components/MovieHeader.tsx";

function MoviesLayout() {

    return (
        <>
            <MovieHeader />
            <Outlet/>
        </>
    )
}

export default MoviesLayout