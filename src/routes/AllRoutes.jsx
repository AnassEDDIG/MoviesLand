import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { MovieList, MovieDetail, Search, NotFound, Discover } from "../pages/index"

export const AllRoutes = () => {
    //setting the intial page number for each of the pages
    const [home, setHome] = useState(1)
    const [popular, setPopular] = useState(1)
    const [top, setTop] = useState(1)
    const [coming, setComing] = useState(1)
    const [searchres, setSearchres] = useState(1)
    const [discover, setDiscover] = useState(1)

    return (
        <>
            {/* simple arrow to scroll up */}
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed z-10 right-4 bottom-5 sm:hover:animate-bounce text-2xl text-sky-700 dark:text-white" >
                <i className="fa-solid fa-up-long"></i>
            </button>
            <Routes>
                <Route path="/"
                    element={<MovieList api='movie/now_playing?language=en-US&page='
                    page={home} setpage={setHome} title="Home" />} />

                <Route path="/movie/:id" element={<MovieDetail />} />

                <Route path="/movie/popular" element={<MovieList api="movie/popular?language=en-US&page="
                    page={popular} setpage={setPopular} title="Popular" />} />

                <Route path="/movie/top" element={<MovieList api="movie/top_rated?language=en-US&page="
                    page={top} setpage={setTop} title="Top rated" />} />

                <Route path="/movie/upcoming" element={<MovieList api="movie/upcoming?language=en-US&page="
                    page={coming} setpage={setComing} title="Upcoming" />} />

                <Route path="/search" element={<Search api="search/movie?query="
                    page={searchres} setpage={setSearchres} />} />

                <Route path="/movie/discover" element={<Discover api="discover/movie?page="
                    page={discover} setpage={setDiscover} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

