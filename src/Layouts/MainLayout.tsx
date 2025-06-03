import React, { useState, useRef } from "react"
import { NavLink } from "react-router";
import type { Movie } from '../types/types.ts'

function MainLayout() {
  const [movies, setMovies] = useState<Movie[] | []>([])
  const inputRef = useRef<HTMLInputElement | null>(null)
  const apiKey = import.meta.env.VITE_API_KEY;

  const searchMovies = async (query: string): Promise<Movie[]> => {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`)

      if (!res.ok) throw new Error(`API error: ${res.status}`)

      const data = await res.json()
      console.log(data)
      return data.results || []
    } catch(error) {
      console.error('Failed to fetch movies:', error);
      return [];
    }
  }

  const handleKeyDown = async (e: React.KeyboardEvent) => {
    if (e.key !== "Enter") return

    const query = inputRef.current?.value?.trim()

    if (query) {
      const fetchedMovies: Movie[] = await searchMovies(query)
      setMovies(fetchedMovies)
      console.log(movies)
    }
  }

  return (
    <div>
      <NavLink
          to="/movies"
          state={{
            category: "trending"
          }}
      >
        Trending
      </NavLink>
      <NavLink
          to="/movies"
          state={{
            category: "popular"
          }}
      >
        Popular
      </NavLink>
      <NavLink
          to="/movies"
          state={{
            category: "top rated"
          }}
      >
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
