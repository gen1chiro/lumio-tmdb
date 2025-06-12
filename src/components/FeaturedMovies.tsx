import FeaturedMovieSection from "./FeaturedMovieSection.tsx"
import type {Movie, MovieList} from "../types/types.ts"

function FeaturedMovies({movies}: {movies: MovieList | null}) {
    const {trending, popular, top_rated}: { trending: Movie[], popular: Movie[], top_rated: Movie[] } = movies

    return (
        <div className='w-full flex flex-col gap-8 items-center p-1 sm:p-4'>
            <FeaturedMovieSection movies={trending} link='/movies' label='Trending' />
            <FeaturedMovieSection movies={popular} link='/movies/popular' label='Popular' />
            <FeaturedMovieSection movies={top_rated} link='movies/top_rated' label='top_rated' />
        </div>
    )
}

export default FeaturedMovies