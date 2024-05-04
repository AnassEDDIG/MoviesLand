import { useEffect, useRef, useState } from "react"
import { useFetch } from "../Hooks/useFetch"
import { Loading, NextAndPrev } from "../components"
import { FilterFields } from "../components/Discover/FilterFields"
import { Card } from "../components/Movie-list"

export const Discover = ({ api, page, setpage }) => {

    //set filter the  any filter stored in browser else set it to nothing
    const [filter, setFilter] = useState(localStorage.getItem("appliedFileter") || "")

    const { data: movies, isLoading } = useFetch(api + page + filter)

    //retrieving genre to passe them later to the genre field
    const { data: categories } = useFetch(`genre/movie/list?language=en`)

    //creating a reference for each of the fields to grab their values
    const genre = useRef(), lang = useRef(), date = useRef(), dur = useRef(), rating = useRef(), scenes = useRef()

    //toggle the filter popUp
    const [hidden, setHidden] = useState(true)

    //the main function the builds up the filtring url
    const handleFilter = () => {
        //first retrieving values via the references
        const gen = genre.current.value;
        const lan = lang.current.value;
        const dr = dur.current.value;
        const scene = scenes.current.value;
        const dat = date.current.value;
        const rate = rating.current.value;

        //building the url and storing it in a variable
        const filterUrl = `${`&with_genres=${gen}`}${`&vote_average.gte=${rate}`}${`&language=${lan}`}${`&with_runtime.gte=${dr}`}${`&include_adult=${scene}`}${`&primary_release_year=${dat}`}`

        //storing the filter in the browser
        localStorage.setItem("appliedFileter", filterUrl)

        //lastly applying the filter and hidding the filter popUp
        setFilter(filterUrl)
        setHidden(true)
    }

    //clearing the currently applying filter from both the display and the browser
    const clearFilter = () => {
        setFilter("")
        localStorage.removeItem('appliedFileter')
    }

    //scroll up to the top the first time we enter discover page
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        localStorage.removeItem("appliedFileter")
        setpage(1)
    }, [])

    //scrolling up also each time w call a new page
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [page])

    return (
        <div>
            {!isLoading && <h1 className="text-center dark:text-white  mb-8 font-bold text-4xl">Movies List </h1>}

            <div className="px-12 mb-6">
                {/* buttons to toggle filter and clear it */}
                <div className="flex items-center justify-between">
                    <button onClick={() => setHidden(!hidden)} className="dark:text-white text-xl"><i className="fa-solid fa-filter"></i> Advanced Filter</button>
                    <button onClick={clearFilter} className="dark:text-white"><i className="fa-solid fa-trash"></i> Clear filter</button>
                </div>
                 {/* all the imput fields */}
                <FilterFields
                    categories={categories}
                    hidden={hidden}
                    genre={genre}
                    lang={lang}
                    date={date}
                    dur={dur}
                    rating={rating}
                    scenes={scenes} />
                <button onClick={handleFilter} className={` ${hidden ? 'hidden' : "block"} mx-auto py-1.5 px-5 rounded-md categories text-white`}><i className="fa-solid fa-screwdriver-wrench"></i> Apply</button>
            </div>
            
            {isLoading && movies && <Loading />}

            {/* Total results number */}
            {!isLoading && movies &&
                <p className="dark:text-gray-400 px-12 mb-4 text-lg text-black  max-sm:text-xl">
                    <i className="fa-solid fa-square-poll-vertical"></i> total Results: {movies.total_results}
                </p>}

            {/* handling when no results were found */}
            {!isLoading && movies && movies.results.length == 0 &&
                <div className="dark:text-gray-400 px-12 mb-4  text-center text-black">
                    <p className="text-2xl max-sm:text-xl">No results were found for this filter</p>
                </div>}

            {/* displaying the filtered data finally */}
            {!isLoading &&
                <div className="grid gap-8 grid-cols-1 sm:max-lg:grid-cols-2 lg:grid-cols-3 max-sm:px-4 px-12">
                    {movies && movies.results.map(movie => (
                        <Card key={movie.id} movie={movie} />
                    ))}
                </div>}

            {/* Next and prev to move trough results pages */}
            {!isLoading && <NextAndPrev movies={movies} page={page} setpage={setpage} />}
        </div >
    )
}
