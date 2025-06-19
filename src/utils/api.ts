import type {Movie, MovieList, CastResponse, Review} from "../types/types.ts";

const apiKey = import.meta.env.VITE_API_KEY;

export const getData = async (endpoint: string) => {
    const res = await fetch(`https://api.themoviedb.org/3/${endpoint}&api_key=${apiKey}`)
    if (!res.ok) throw new Error('Fetch failed')
    return res.json()
}

export const searchMovies = async (query: string): Promise<Movie[]> => {
    try {
        console.log(encodeURIComponent(query))
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&page=1`)

        if (!res.ok) throw new Error(`API error: ${res.status}`)

        const data = await res.json()
        console.log(data)
        return data.results || []
    } catch (error) {
        console.error('Failed to search movies:', error);
        return [];
    }
}

export const mainLayoutLoader = async (): Promise<MovieList> => {
    const [trending, popular, topRated] = await Promise.all([
        getData('trending/movie/week?'),
        getData('movie/popular?page=1'),
        getData('movie/top_rated?page=1'),
    ])

    return {
        trending: trending.results,
        popular: popular.results,
        top_rated: topRated.results
    }
}

export const trendingLoader = async (): Promise<Movie[]> => {
    const data = await getData("trending/movie/week?")
    return data.results
}

export const popularLoader = async (): Promise<Movie[]> => {
    const data = await getData("movie/popular?page=1")
    return data.results
}

export const topRatedLoader = async (): Promise<Movie[]> => {
    const data = await getData("movie/top_rated?page=1")
    return data.results
}

export const searchMovieLoader = async ({ params }): Promise<Movie[]> => {
    const query = params.query
    const data = await getData(`search/movie?query=${query}`)
    console.log(data.results)
    return data.results
}

export const movieDetailLoader = async ({ params }): Promise<{ movie: Movie; cast: CastResponse, reviews: Review[], similar: Movie[] }> => {
    const movieId = params.id

    const [movie, cast, reviews, similar] = await Promise.all([
        getData(`movie/${movieId}?`),
        getData(`movie/${movieId}/credits?`),
        getData(`movie/${movieId}/reviews?`),
        getData(`movie/${movieId}/similar?`)
    ])

    return { movie, cast, reviews: reviews.results, similar: similar.results }
}

