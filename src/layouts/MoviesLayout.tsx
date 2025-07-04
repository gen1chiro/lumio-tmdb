import { Outlet } from "react-router"
import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"
import { ScrollToTop } from "../utils/utils.ts";

function MoviesLayout() {

    return (
        <div className='h-screen flex flex-col'>
            <div className="fixed inset-0 -z-10 h-full w-full
                [background:radial-gradient(125%_125%_at_50%_10%,#f3f4f6_40%,#d1d5db_100%)]
                dark:[background:radial-gradient(125%_125%_at_50%_10%,#18181b_40%,#09090b_100%)]"
            ></div>
            <ScrollToTop />
            <Header variation='movie'/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default MoviesLayout