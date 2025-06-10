import { useState, useEffect } from "react";
import type {Movie} from "../types/types.ts";

function Hero({movies}: {movies: Movie[]}) {
    const [imageIndex, setImageIndex] = useState(0)
    const images = movies.map(movie => movie.backdrop_path)

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(prev => (prev + 1) % images.length)
        }, 8000)

        return () => clearInterval(interval);
    }, [images.length])

    const goToSlide = (index) => {
        setImageIndex(index)
    }

    return (
        <div className='relative w-full h-[calc(100vh-180px)] bg-red-400 rounded-xl overflow-hidden'>
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
            <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30'>
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