import { useLoaderData } from "react-router";
import type { Movie } from "../types/types.ts";

function MovieDetail() {
    const movie: Movie = useLoaderData()
    const { original_title, overview, poster_path, release_date, genres } = movie
    const releaseYear = release_date.split("-")[0]

    const genresToShow = genres.map(genre => genre.name).slice(0, 2).join(" - ")

    return (
        <div className='mt-16 w-5/6 sm:w-11/12 max-w-7xl mx-auto bg-white flex flex-col items-center rounded-2xl text-gray-600 p-4'>
            <div className='w-full flex justify-between'>
                <h1>{original_title}</h1>
                <h1>{releaseYear}</h1>
            </div>
            <h1 className='fixed opacity-0 md:opacity-100'>{genresToShow}</h1>
            <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={original_title}
                className='aspect-[2/3] object-cover w-56 mt-8 rounded-2xl shadow-2xl '
            />
            <h2 className='text-center text-sm w-4/6 xl:w-2/6 my-4'>{overview}</h2>
        </div>
    )
}

export default MovieDetail