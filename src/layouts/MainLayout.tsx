import React, { useState, useRef, useEffect } from "react"
import type { Movie, MovieList } from '../types/types.ts'
import { fetchMovies, searchMovies } from "../utils/api.ts"
import Hero from "../components/Hero.tsx"
import FeaturedMovies from "../components/FeaturedMovies.tsx";
import Header from "../components/Header.tsx";

function MainLayout() {
    const [movies, setMovies] = useState<MovieList | null>(null)
    const [searchedMovies, setSearchedMovies] = useState<Movie[] | []>([])
    const inputRef = useRef<HTMLInputElement | null>(null)

    const heroMovies = movies?.popular.slice(0, 5)

    useEffect(() => {
        const fetch = async () => {
            setMovies(await fetchMovies())
        }

        fetch()
    }, [])

    const handleKeyDown = async (e: React.KeyboardEvent) => {
        if (e.key !== "Enter") return

        const query = inputRef.current?.value?.trim()

        if (query) {
            setSearchedMovies(await searchMovies(query))
            console.log(searchedMovies)
        }
    }

    return (
        <>
            <Header variation='main' />
            <div className='w-5/6 sm:w-11/12 max-w-7xl flex flex-col gap-6 mt-4 sm:mt-24 p-2 bg-white shadow-xl border border-gray-100 mx-auto rounded-2xl'>
                {movies ?
                    <Hero movies={heroMovies}/> :
                    <div className='w-full h-[calc(100vh-180px)] bg-gray-200 animate-pulse rounded-xl'></div>
                }
                {movies ?
                    <FeaturedMovies movies={movies} /> :
                    <div className='w-full bg-gray-200 animate-pulse'></div>
                }
            </div>
        </>
    )
}

export default MainLayout
