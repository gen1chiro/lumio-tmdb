import { useRouteLoaderData } from "react-router";
import type {Review} from "../types/types.ts";

function MovieReviews() {
    const { reviews }: Review[] = useRouteLoaderData("movie-detail")

    return (
        <div className='mt-24 w-5/6 sm:w-11/12 max-w-7xl mx-auto bg-white rounded-2xl'>
            REVIEWS HERE
            {console.log(reviews)}
        </div>
    )
}

export default MovieReviews