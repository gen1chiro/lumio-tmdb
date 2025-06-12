import React, { useEffect, useRef, useState } from "react";
import type {Movie} from "../types/types.ts";
import { useDebounce } from "../hooks/useDebounce.ts";
import { searchMovies } from "../utils/api.ts";
import { Link, useNavigate } from "react-router";

function MovieSearch({variation}: {variation: 'main' | 'movie'}) {
    const [searchInput, setSearchInput] = useState('')
    const [searchSuggestions, setSearchSuggestions] = useState<Movie[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const searchInputRef = useRef<HTMLInputElement | null>(null)
    const debouncedSearch = useDebounce(searchInput, 800)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchSearchSuggestions = async () => {
            setIsLoading(true)

            const suggestions = await searchMovies(debouncedSearch)
            setSearchSuggestions(suggestions)

            setIsLoading(false)
        }

        fetchSearchSuggestions()
    }, [debouncedSearch])

    const handleSelectMovie = () => {
        setSearchInput('')
        setSearchSuggestions([])

        if (searchInputRef.current) {
            searchInputRef.current?.blur();
            searchInputRef.current.value = ""
        }
    }

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && searchInput.trim()) {
            handleSelectMovie()
            navigate(variation === 'movie' ?
                `search/${encodeURIComponent(searchInput.trim())}` :
                `movies/search/${encodeURIComponent(searchInput.trim())}`
            );
        }
    }

    return (
        <>
            <input type='text'
                   placeholder='search movies...'
                   ref={searchInputRef}
                   onKeyDown={handleSearch}
                   onChange={(e) => setSearchInput(e.target.value)}
                   onFocus={() => setIsFocused(true)}
                   onBlur={() => setTimeout(() => setIsFocused(false), 300)}
                   className='border border-gray-200 bg-gray-100 focus:outline-0 focus:ring-1 px-2 h-8 w-full text-sm font-light rounded-md'/>
            {isFocused && searchSuggestions.length > 0 &&
                <div className='w-full min-h-10 max-h-80 overflow-y-auto flex flex-col mt-1 p-2 gap-4 absolute bg-white rounded-md shadow-lg border border-gray-100'>
                    {isLoading ?
                        <div className='w-full flex flex-col gap-4'>
                            <div className='w-full h-2 bg-gray-100 animate-pulse rounded-full'></div>
                            <div className='w-full h-2 bg-gray-100 animate-pulse rounded-full'></div>
                            <div className='w-full h-2 bg-gray-100 animate-pulse rounded-full'></div>
                            <div className='w-full h-2 bg-gray-100 animate-pulse rounded-full'></div>
                            <div className='w-full h-2 bg-gray-100 animate-pulse rounded-full'></div>
                        </div>
                        :
                        searchSuggestions.map((searchSuggestion, index) => (
                            <Link key={index}
                                  to={`/movies/${searchSuggestion.id}`}
                                  onClick={handleSelectMovie}
                                  className='w-full hover:bg-gray-100 p-2'
                            >
                                {searchSuggestion.original_title}
                            </Link>
                        ))}
                </div>
            }
        </>
    )
}

export default MovieSearch