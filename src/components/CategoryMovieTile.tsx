import { Link } from "react-router";
import type { CategoryMovieTileProps } from "../types/types.ts";
import { genreMap } from "../utils/api.ts";

function CategoryMovieTile({ movie }: CategoryMovieTileProps) {
    const { original_title, poster_path, id, release_date, genre_ids} = movie
    const releaseYear = release_date.split("-")[0]

    const genresToShow = genre_ids
        .slice(0, 2)
        .map(id => genreMap[id])
        .join(" - ");

    return (
        <Link to={`/movies/${id}`}
            className='bg-white hover:bg-gray-200 flex flex-col items-center px-4 pb-4 pt-2 rounded-3xl text-gray-400 text-sm group'
        >
            <div className='w-full flex justify-between'>
                <h1 className='truncate'>{original_title}</h1>
                <h1>{releaseYear}</h1>
            </div>
            {poster_path ?
                <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={original_title}
                                className='aspect-[2/3] object-cover w-48 mt-8 rounded-2xl shadow-2xl group-hover:scale-[102%] transition-all ease-in-out'
                /> :
                <div className='aspect-[2/3] w-48 mt-8 rounded-2xl shadow-2xl group-hover:scale-[102%] transition-all ease-in-out'></div>
            }
            <div className='w-full mt-8 flex justify-between'>
                <h1 className='truncate'>{genresToShow}</h1>
                <h1 className='text-md text-black group-hover:underline'>View Details</h1>
            </div>
        </Link>
    )
}

export default CategoryMovieTile