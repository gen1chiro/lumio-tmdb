import {Link} from "react-router";

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='w-full mt-10  bg-gradient-to-br from-gray-600 via-zinc-900 to-zinc-800 min-h-48 shadow-lg text-white'>
            <div className='flex flex-col sm:flex-row justify-between items-center gap-10 w-11/12 max-w-7xl h-5/6 mx-auto p-8'>
                <div className='h-full flex gap-2 items-center'>
                    <svg fill="#ffffff" height="25px" width="25px" version="1.1" id="Capa_1"
                         xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                         viewBox="0 0 490 490" xmlSpace="preserve">
                        <g>
                            <polygon
                                points="384.643,429.085 105.357,149.797 105.357,0 0,0 0,490 490,490 490,0 384.643,0 	"/>
                        </g>
                    </svg>
                    <h1 className='text-2xl'>lumio</h1>
                </div>
                <div className='flex items-start gap-20'>
                    <div>
                        <h1 className='font-bold'>lumio</h1>
                        <ul className='font-thin'>
                            <li><Link to='/movies'>Trending</Link></li>
                            <li><Link to='/movies/popular'>Popular</Link></li>
                            <li><Link to='/movies/top_rated'>Top Rated</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-bold'>The Movie DB</h1>
                        <ul className='font-thin'>
                            <li><a href='https://www.themoviedb.org/' target="_blank">Website</a></li>
                            <li><a href='https://developer.themoviedb.org/docs/getting-started' target="_blank">API</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1 className='w-11/12 max-w-7xl mx-auto text-gray-300 font-thin text-sm px-8 text-center sm:text-left'>
                ©{currentYear} | Designed & Developed by{' '}
                <a href="https://github.com/gen1chiro"
                   target="_blank"
                >
                     Jul Leo Javellana
                </a>
            </h1>
        </footer>
    )
}

export default Footer