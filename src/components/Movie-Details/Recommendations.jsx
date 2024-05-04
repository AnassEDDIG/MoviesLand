import { Link } from "react-router-dom"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFetch } from "../../Hooks"
import { settings } from "..";
import backUp from "../../assets/backupPoster.jpg"

export const Recommendations = ({ id }) => {
    const { data: movies } = useFetch(`movie/${id}/similar?language=en-US&page=1`)
    return (
        <div>
            <h2 className="dark:text-white max-sm:px-6 lg:px-12 text-xl"><i className="fa-solid fa-heart-circle-plus text-red-600 "></i> You Might Also Like:</h2>
            <div className="flex items-center px-20  max-sm:px-6 mt-4 gap-1 mb-8">
                <div className="grid grid-cols-1">
                    <Slider {...settings}>
                        {movies && movies.results.map((movie) => (
                            <div key={movie.id} className="transition duration-300 text-center shadow-even bg-stone-300 dark:bg-slate-700 max-sm:p-3  rounded-md max-sm:mb-8">
                                <Link to={`/movie/${movie.id}`}>
                                    <img className="mx-auto scale-95 rounded-md mb-4 hover:scale-100 transition duration-300"
                                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : backUp}
                                        alt={`${movie.original_title} poster`} />
                                </Link>
                                <h1 className="dark:text-white text-xl font-bold mb-4">{movie.original_title}</h1>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </div >

    )
}
