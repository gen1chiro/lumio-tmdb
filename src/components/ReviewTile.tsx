import {Link} from "react-router";

function ReviewTile({ review }) {
    const { author, author_details, content } = review
    const { rating } = author_details

    return (
        <div className='shadow-lg p-4 pb-2 rounded-2xl w-full'>
            <div className='w-full'>
                <h1 className='font-bold'>{author}</h1>
                <h1 className='font-semibold'>{rating ? rating : '-'} / 10</h1>
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