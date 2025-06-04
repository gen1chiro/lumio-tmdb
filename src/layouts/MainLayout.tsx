import React, { useState, useRef, useEffect } from "react"
import { NavLink } from "react-router";
import type { Movie, MovieList } from '../types/types.ts'
import { fetchMovies, searchMovies } from "../utils/api.ts";

function MainLayout() {
    const [movies, setMovies] = useState<MovieList | null>(null)
    const [searchedMovies, setSearchedMovies] = useState<Movie[] | []>([])
    const inputRef = useRef<HTMLInputElement | null>(null)

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
        <div>
            {console.log(movies)}
            <NavLink to="/movies">
                Trending
            </NavLink>
            <NavLink to="/movies/popular">
                Popular
            </NavLink>
            <NavLink to="/movies/top_rated">
                Top Rated
            </NavLink>
            <input ref={inputRef}
                   type='text'
                   onKeyDown={handleKeyDown}
                   className='border-gray-300 border-1'
            />
        </div>
    )
}

export default MainLayout
