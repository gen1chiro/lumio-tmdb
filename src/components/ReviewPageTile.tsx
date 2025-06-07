import { useState, useRef, useEffect } from "react";
import default_profile from "../assets/default_profile.jpg";

function ReviewPageTile({ review }) {
    const { author, author_details, content } = review
    const { rating, avatar_path } = author_details
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    const [showReadMore, setShowReadMore] = useState<boolean>(false)
    const textRef = useRef<HTMLParagraphElement | null>(null)

    const avatarSrc = avatar_path ?
        `https://image.tmdb.org/t/p/w45${avatar_path}` :
        default_profile

    useEffect(() => {
        const element = textRef.current
        if (element) {
            // Check if text is truncated by comparing scroll height with client height
            setShowReadMore(element.scrollHeight > element.clientHeight)
        }
    }, [content])

    const handleClick = () => {
        setIsExpanded(prevState => !prevState)
    }

    return (
        <div className='shadow-lg p-4 pb-2 rounded-2xl w-full border-gray-200 border'>
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
                <p ref={textRef} className={`text-sm ${isExpanded ? "" : "line-clamp-3"} my-2`}>{content}</p>
            </div>
            {showReadMore && (
                <div className='flex justify-end my-2'>
                    <button className="hover:underline text-sm"
                            onClick={handleClick}
                    >
                        {isExpanded ? "read less" : "read more"}
                    </button>
                </div>
            )}
        </div>

    )
}

export default ReviewPageTile