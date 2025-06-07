import {Link, useRouteLoaderData} from "react-router";
import type {Movie, CastResponse, Review} from "../types/types.ts";
import ReviewTile from "../components/ReviewTile.tsx";
import default_profile from "../assets/default_profile.jpg";

function MovieDetail() {
    const movieDetails: { movie: Movie; cast: CastResponse; reviews: Review[] } =  useRouteLoaderData("movie-detail")
    const { original_title, overview, poster_path, release_date, genres, backdrop_path } = movieDetails.movie
    const { cast , reviews} = movieDetails
    const castInfo = cast.cast.map(({name, profile_path}) => (
        {
            name,
            profile_path
        }
    )).slice(0, 10)

    const releaseYear = release_date.split("-")[0]

    const genresToShow = genres.map(genre => genre.name).slice(0, 2).join(" - ")

    const castElements = castInfo.map(({name, profile_path}, index) => (
        <div key={index} className='flex-shrink-0'>
            <img src={profile_path ?
                `https://image.tmdb.org/t/p/w185${profile_path}` :
                 default_profile
            } alt={name}
                className='aspect-[2/3] w-28 rounded-lg shadow object-cover'
            />
            <h1 className='text-sm truncate w-24'>{name}</h1>
        </div>
    ))

    return (
        <div
            className='relative mt-24 w-5/6 sm:w-11/12 max-w-7xl mx-auto bg-white flex flex-col gap-y-3 items-center rounded-2xl text-gray-600 p-4'>
            <div className='w-full flex justify-between'>
                <h1>{original_title}</h1>
                <h1>{releaseYear}</h1>
            </div>
            <h1 className='absolute opacity-0 md:opacity-100'>{genresToShow}</h1>
            <div className='relative w-full flex justify-center rounded-2xl overflow-hidden'
                 style={{
                     backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${backdrop_path})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                 }}
            >
                <div className='absolute inset-0 bg-white opacity-60'></div>
                <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={original_title}
                     className='relative z-10 aspect-[2/3] object-cover w-56 my-6 rounded-2xl shadow-2xl '
                />
            </div>
            <h2 className='text-center text-sm w-5/6 md:w-4/6 xl:w-3/6 my-4'>{overview}</h2>
            <h1 className='w-full md:w-4/6 xl:w-3/6 font-semibold'>Cast</h1>
            <div className='w-full md:w-4/6 xl:w-3/6 relative'>
                <div className='flex overflow-x-auto overflow-y-hidden gap-4 pb-2 scrollbar-hide'>
                    {castElements}
                </div>
                <div className='absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-white to-transparent pointer-events-none'></div>
            </div>
            <div className="w-full md:w-4/6 xl:w-3/6 mt-8">
                <Link to="reviews"
                      className="w-full font-semibold hover:underline mt-4"
                >
                    Reviews<span className="font-normal">({reviews.length})</span>
                </Link>
                {reviews.length > 0 ?
                    <ReviewTile review={reviews[0]}/> :
                    <div className='w-full bg-gray-100 rounded-lg h-10 flex items-center justify-center text-gray-400 text-sm'>No reviews Available</div>
                }
            </div>
        </div>
    )
}

export default MovieDetail