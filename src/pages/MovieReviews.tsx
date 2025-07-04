import { useRouteLoaderData } from "react-router";
import ReviewPageTile from "../components/ReviewPageTile.tsx";
function MovieReviews() {
    const { reviews, movie } = useRouteLoaderData("movie-detail")
    const { original_title, poster_path } = movie

    const reviewElements = reviews.length > 0 ?
        reviews.map((review, index) => (
            <ReviewPageTile key={index} review={review}/>
        )) :
        <div>
            No reviews available
        </div>

    return (
        <div className='flex flex-wrap items-start mt-4 sm:mt-24 mb-10 w-11/12 max-w-7xl mx-auto bg-white dark:bg-zinc-800 rounded-2xl dark:text-gray-200 border border-white dark:border-zinc-700'>
            <div className='w-full lg:w-1/4 flex flex-col flex-shrink-0 justify-center items-center p-8'>
                {poster_path ?
                    <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={original_title}
                         className='relative z-10 aspect-[2/3] object-cover w-60 rounded-2xl shadow-2xl '
                    /> :
                    <div className='aspect-[2/3] bg-gray-100 dark:bg-gray-200 w-60 rounded-2xl shadow-2xl '></div>
                }
                <h1 className='w-full text-center'>{original_title}</h1>
            </div>
            <div className='flex-1 min-w-0 p-4 sm:p-8 flex flex-col gap-4'>
            <h1 className='font-semibold text-lg'>Reviews</h1>
                {reviewElements}
            </div>
        </div>
    )
}

export default MovieReviews