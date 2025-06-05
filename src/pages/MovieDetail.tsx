import { useLoaderData } from "react-router";
import type { Movie } from "../types/types.ts";

function MovieDetail() {
    const movie: Movie = useLoaderData()
    const { original_title, overview, poster_path } = movie

    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={original_title}/>
            <h1>{original_title}</h1>
            <h2>{overview}</h2>
        </div>
    )
}

export default MovieDetail