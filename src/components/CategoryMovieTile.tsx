import { Link } from "react-router";
import type { CategoryMovieTileProps } from "../types/types.ts";

function CategoryMovieTile({ movie }: CategoryMovieTileProps) {
    const { original_title, poster_path, id} = movie

    return (
        <Link to={`/movies/${id}`}>
            <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={original_title}/>
            <h1>{original_title}</h1>
        </Link>
    )
}

export default CategoryMovieTile