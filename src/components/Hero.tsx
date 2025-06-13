import { useState, useEffect } from "react";
import {useNavigate} from "react-router";
import type {Movie} from "../types/types.ts";

function Hero({movies}: {movies: Movie[]}) {
    const [imageIndex, setImageIndex] = useState(0)
    const images = movies.map(movie => movie.backdrop_path)
    const currentMovie = movies[imageIndex]
    const {poster_path, original_title, overview, id} = currentMovie
    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(prev => (prev + 1) % images.length)
        }, 8000)

        return () => clearInterval(interval);
    }, [images.length])

    const goToSlide = (index) => {
        setImageIndex(index)
    }

    const handleClick = () => {
        navigate(`movies/${id}`)
    }

    return (
        <div className='relative w-full h-[calc(100vh-180px)] sm:min-h-[600px] lg:h-[calc(100vh-300px)] lg:min-h-[500px] lg:max-h-[600px] bg-red-400 rounded-xl overflow-hidden'>
            <div className='relative w-full h-full'>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={`https://image.tmdb.org/t/p/w1280/${img}`}
                        alt={`Slide ${index}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                            index === imageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    />
                ))}
                <div className='absolute inset-0 bg-gray-700 opacity-60 z-20'></div>
            </div>
            <div className='absolute inset-5 sm:inset-20 z-30 flex flex-col md:flex-row items-center justify-center gap-6'>
                <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={original_title}
                     className='z-10 aspect-[2/3] object-cover h-3/4 sm:h-auto sm:w-56 lg:w-72 rounded-2xl shadow-2xl'
                />
                <div className='flex flex-col gap-2 items-center md:items-start'>
                    <h1 className='text-white font-semibold text-lg sm:text-3xl text-center md:text-left'>{original_title}</h1>
                    <p className='hidden md:block text-white font-light'>{overview}</p>
                    <button
                        onClick={handleClick}
                        className='w-fit bg-white rounded-full px-4 font-light text-lg hover:scale-105 hover:bg-gray-200 transition-all ease-in-out'
                    >
                        details
                    </button>
                </div>
            </div>
            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30'>
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none ${
                            index === imageIndex
                                ? 'bg-white shadow-lg'
                                : 'bg-gray-500 bg-opacity-50'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Hero