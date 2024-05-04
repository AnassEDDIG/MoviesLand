import { Card } from "./Card"

export const Movies = ({ filter, movies }) => {
    return (
        <div className="grid gap-8 grid-cols-1 sm:max-lg:grid-cols-2 lg:grid-cols-3 max-sm:px-4 px-12">
            {filter ? movies.results.filter((movie) => movie.genre_ids.includes(filter)).length > 0 ? movies.results.filter((movie) => movie.genre_ids.includes(filter)).map((movie) => (
                <Card key={movie.id} movie={movie} />
            )) : <p className="text-xl col-span-3 text-center dark:text-white"><i className="fa-solid fa-circle-info"></i> No movies belong to this genre in this page try a different page or a differrent genre or just go to Discover page and use Advanced Filter</p>
                : movies && movies.results.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
        </div>
    )
}
