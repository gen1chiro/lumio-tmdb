import { useLocation } from "react-router";

function MoviesLayout() {
    const location = useLocation()
    const category = location.state?.category

    return (
        <h1>{category}</h1>
    )
}

export default MoviesLayout