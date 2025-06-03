import { createBrowserRouter, createRoutesFromElements, Route} from "react-router";
import MainLayout from "../Layouts/MainLayout.tsx";
import MoviesLayout from "../Layouts/MoviesLayout.tsx";
import MovieDetail from "../Pages/MovieDetail.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<MainLayout />} />
            <Route path="/movies" element={<MoviesLayout />}>
                <Route path="movies/:id" element={<MovieDetail />}/>
            </Route>
        </>
    )
)

export default router