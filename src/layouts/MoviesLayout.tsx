import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header.tsx";

function MoviesLayout() {

    return (
        <>
            <Header variation='movie' />
            <Outlet/>
        </>
    )
}

export default MoviesLayout