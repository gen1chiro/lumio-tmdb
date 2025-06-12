import { useLoaderData } from "react-router"
import type { MovieList } from '../types/types.ts'
import Hero from "../components/Hero.tsx"
import FeaturedMovies from "../components/FeaturedMovies.tsx"
import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"

function MainLayout() {
    const movies: MovieList = useLoaderData()
    const heroMovies = movies?.popular.slice(0, 5)

    return (
        <>
            <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#f3f4f6_40%,#d1d5db_100%)]"></div>
            <Header variation='main'/>
            <div
                className='w-11/12 max-w-7xl flex flex-col gap-6 mt-4 sm:mt-24 p-2 bg-white shadow-xl border border-gray-100 mx-auto rounded-2xl'>
                <Hero movies={heroMovies}/>
                <FeaturedMovies movies={movies}/>
            </div>
            <Footer/>
        </>
    )
}

export default MainLayout
