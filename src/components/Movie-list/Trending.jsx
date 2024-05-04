import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFetch } from "../../Hooks/useFetch";
import { settings } from "..";
import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";

export const Trending = () => {
    const { data: movies, isLoading } = useFetch(`trending/all/day?language=en-US`)
    const trSettings = {
        ...settings,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
    }

    const slider = useRef(null)

    useEffect(() => {
        const trend = setInterval(() => {
            slider?.current?.slickNext()
        }, 5000)
        return () => clearInterval(trend)
    })



    return (
        <div>

            {!isLoading &&

                <div className="grid grid-cols-1 px-10 mb-20 max-sm:mb-2">
                    <h1 className="text-center font-bold dark:text-white mb-8 text-4xl">Trending Movies <i className="fa-solid fa-arrow-trend-up text-red-500"></i></h1>
                    <Slider {...trSettings} ref={slider}>
                        {movies && movies.results.map((movie) => (
                            <div key={movie.id} className="transition-transform duration-300 shadow-even drop-shadow-md text-center dark:bg-slate-700 bg-gray-300 max-sm:p-3  rounded-md max-sm:mb-14">
                                <Link to={`/movie/${movie.id}`}>
                                    <img className="mx-auto drop-shadow-md scale-95 rounded-md hover:scale-100 transition duration-300 brightness-90 hover:brightness-110"
                                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : backUp}
                                        alt={`${movie.original_title} poster`} />
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            }
        </div>

    )
}
