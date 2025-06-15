import {Link} from "react-router";
import default_profile from "../assets/default_profile.jpg"

function ReviewTile({ review }) {
    const { author, author_details, content } = review
    const { rating, avatar_path } = author_details

    const avatarSrc = avatar_path ?
        `https://image.tmdb.org/t/p/w45${avatar_path}` :
        default_profile

    return (
        <div className='shadow-lg p-4 pb-2 rounded-2xl w-full border-gray-200 dark:border-zinc-700 border'>
            <div className='w-full'>
                <div className='flex gap-4 items-center'>
                    <img src={avatarSrc} alt='reviewer profile photo'
                         className='rounded-full aspect-square h-10'
                    />
                    <div>
                        <h1 className='font-bold'>{author}</h1>
                        <h1 className='font-semibold'>{rating ? rating : '-'} / 10</h1>
                    </div>
                </div>
                <p className='text-sm line-clamp-3 mt-2'>{content}</p>
            </div>
            <div className='flex justify-end my-2'>
                <Link to="reviews"
                      className="hover:underline text-sm"
                >
                    view full reviews
                </Link>
            </div>
        </div>

    )
}

export default ReviewTile