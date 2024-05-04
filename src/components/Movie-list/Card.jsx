import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import BackUpPoster from "../../assets/backupPoster.jpg"

export const Card = ({ movie }) => {
  return (
    <div className="dark:shadow-even shadow-xl drop-shadow-md rounded-md p-2 dark:bg-slate-700 bg-gray-300">
      <Link to={`/movie/${movie.id}`}>
        <img className="mx-auto scale-90 rounded-md mb-1 hover:scale-100 brightness-90 drop-shadow-md hover:brightness-110 transition duration-300"
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : BackUpPoster}
          alt={`${movie.original_title || movie.original_name} poster`} />
      </Link>

      <div className="px-4">
        <h1 className="dark:text-white text-xl mb-1 font-bold">
          {movie.original_title || movie.original_name}
        </h1>
        <p className="dark:text-gray-400 text-gray-700 mb-2" >{movie.overview}</p>
      </div>
    </div >
  )
}

Card.propTypes = {
  movie: PropTypes.object
}