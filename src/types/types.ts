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

export type CategoryMovieTileProps = {
    movie: Movie
}

export type CastMember = {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
    cast_id: number;
    credit_id: string;
    order: number;
};

export type CrewMember = {
    id: number;
    name: string;
    job: string;
    department: string;
    credit_id: string;
    profile_path: string | null;
};

export type CastResponse = {
    id: number;
    cast: CastMember[];
    crew: CrewMember[];
};

interface AuthorDetails {
    name: string;
    username: string;
    avatar_path: string | null;
    rating: number | null;
}

export interface Review {
    author: string;
    author_details: AuthorDetails;
    content: string;
    created_at: string;
    updated_at: string;
    id: string;
    url: string;
}