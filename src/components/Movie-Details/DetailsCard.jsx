import { useState } from "react"
import backupPoster from "../../assets/backupPoster.jpg"
import holder from '../../assets/companyLogoHolder.png'

export const DetailsCard = ({ movie }) => {
    const [showMore, setShowMore] = useState(false)
    return (
        <div>
            <div className="flex mt-6 max-w-4xl mx-auto gap-12 max-sm:flex-col ">
                <img
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : backupPoster}
                    alt={`${movie.original_title} poster`}
                    className="rounded  max-sm:mx-auto max-w-xs self-start " />
                <div className="flex flex-col gap-4 dark:text-white max-sm:px-2">
                    <h1 className="text-4xl ">{movie.original_title}</h1>
                    <p>{movie.overview}</p>
                    <ul className="flex gap-4 flex-wrap">
                        {movie.genres.map((gen) => (
                            <button key={gen.id} className="border px-4 py-2 rounded-md font-bold text-white categories">{gen.name}</button>
                        ))}
                    </ul>
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-star text-yellow-500 text-sm"></i><p>{movie.vote_average} · {movie.vote_count} reviews</p>
                    </div>
                    <ul className="leading-8">
                        <li><span className="dark:text-golden font-bold mr-2 dark:font-normal"><i className="fa-solid fa-satellite"></i> Status:</span> {movie.status}</li>
                        <li><span className="dark:text-golden font-bold mr-2 dark:font-normal"><i className="fa-regular fa-hourglass-half"></i> Duration:</span> {movie.runtime}min</li>
                        <li><span className="dark:text-golden font-bold mr-2 dark:font-normal"><i className="fa-solid fa-money-bill-trend-up"></i> Budget:</span> {movie.budget}$</li>
                        <li><span className="dark:text-golden font-bold mr-2 dark:font-normal"><i className="fa-solid fa-sack-dollar"></i> Revenue:</span> {movie.revenue}$</li>
                        <li><span className="dark:text-golden font-bold mr-2 dark:font-normal"><i className="fa-solid fa-calendar-days"></i> Release-Date:</span> {movie.release_date}</li>
                        <li className="cursor-pointer"><a target="_blank" href={`https://www.imdb.com/title/${movie.imdb_id}`}><span className="dark:text-golden font-bold mr-2 dark:font-normal"><i className="fa-solid fa-film"></i> IMDB Code:</span> {movie.imdb_id}</a></li>
                    </ul>
                    <button onClick={() => setShowMore(prev => !prev)}>
                        Show {showMore ? "Less" : "More"}
                        {showMore ? <i className="fa-solid fa-angles-up animate-bounce"></i>
                            : <i className="fa-solid fa-angles-down animate-bounce"></i>}
                    </button>
                </div>
            </div>
            {/* additional data of this movie */}
            {showMore &&
                <div className="max-w-4xl mx-auto mt-8 leading-8 max-sm:ps-6 ">
                    <div>
                        <p className="dark:text-white"><span className="font-bold  dark:text-golden dark:font-normal"><i className="fa-solid fa-flag"></i> Origin Country:</span> {movie.origin_country}</p>
                        <span className="font-bold dark:font-normal dark:text-golden"><i className="fa-solid fa-building"></i> Production Companies:</span>
                        <div className="grid grid-cols-3 gap-4 px-12 mt-4 max-sm:grid-cols-1 max-md:grid-cols-2 ">
                            {movie.production_companies.map((pro) => (
                                <div key={pro.id} className="flex items-center gap-2 content-center md:max-lg:text-sm  " >
                                    <img className="max-w-20 md:max-lg:w-12 " src={pro.logo_path ? `https://image.tmdb.org/t/p/w500${pro.logo_path}` : holder} alt="" />
                                    <p className="dark:text-white text-sm">{pro.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div >
            }
        </div>
    )
}
