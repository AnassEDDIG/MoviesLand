import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useUpdateTitle, useFetch } from "../Hooks/"
import { Loading, NextAndPrev } from "../components/Common"
import { useLocation } from "react-router-dom"
import { Movies, Trending, Categories } from "../components/Movie-list"


export const MovieList = ({ api, page, setpage, title }) => {
  const { data: movies, isLoading } = useFetch(api + page)
  const location = useLocation()
  const [filter, setFilter] = useState(null)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setFilter(null)
  }, [page])

  useEffect(() => {
    window.scrollTo({ top: 0, });
    setpage(1)
    setFilter(null)
  }, [api, location.pathname])

  useUpdateTitle(title)

  return (
    <section className="py-7">
      {location.pathname == "/" && < Trending />}
      {isLoading && <Loading />}
      {!isLoading && <h1 className="text-center dark:text-white  mb-8 font-bold text-4xl">Movies List </h1>}
      {!isLoading && <Categories setFilter={setFilter} />}
      {!isLoading && <Movies filter={filter} movies={movies} />}
      {!isLoading && <NextAndPrev movies={movies} page={page} setpage={setpage} />}
    </section >
  )
}

MovieList.propTypes = {
  api: PropTypes.string,
  page: PropTypes.number,
  setpage: PropTypes.func
}