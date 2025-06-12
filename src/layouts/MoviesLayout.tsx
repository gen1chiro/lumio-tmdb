import React from "react"
import { Outlet } from "react-router"
import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"

function MoviesLayout() {

    return (
        <>
            <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#f3f4f6_40%,#d1d5db_100%)]"></div>
            <Header variation='movie'/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default MoviesLayout