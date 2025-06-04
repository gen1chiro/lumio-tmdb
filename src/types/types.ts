import React from "react";

export interface Movie {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export type MovieList = {
    trending: Movie[]
    popular: Movie[]
    top_rated: Movie[]
}

export type MovieContextType = {
    movies: MovieList | null
    setMovies: React.Dispatch<React.SetStateAction<MovieList | null>>
}