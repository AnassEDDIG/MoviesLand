import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useFetch, useUpdateTitle } from "../Hooks"
import { Card } from "../components/Movie-list"
import { NextAndPrev } from "../components/Common"
import PropTypes from "prop-types"
import noResults from "../assets/noresults.png"

export const Search = ({ api, page, setpage }) => {
  //to handle the query that the user had searched
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")

  const { data: movies, isLoading } = useFetch(api + query + `&page=${page}`)

  //dcroll to top after changing page
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [page])

  //reassign the page to first one
  useEffect(() => {
    setpage(1)
  }, [api])

  useUpdateTitle(`Search Results for ${query}`)

  return (
    <div>
      <section>
        //custom loading for search
        {isLoading &&
          <div className="dark:text-white">
            <h1 className="text-xl md:text-3xl font-bold flex items-center">L<svg stroke="currentColor" fill="currentColor" strokeWidth="0"
              viewBox="0 0 24 24" className="animate-spin" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z">
              </path>
            </svg> ading . . .</h1>
          </div>}

        //handle both when there's results or not
        {!isLoading &&
          <p className="dark:text-gray-400 text-black text-2xl max-sm:text-xl">
            {movies && movies.results.length > 0 ?
              <i className="fa-solid fa-square-poll-vertical"></i>
              : <i className="fa-regular fa-face-frown"></i>
            }
            {movies && movies.results.length > 0 ?
              ` Results for "${query}"` : ` No Results found related to "${query}"`
            }
            {movies && movies.results.length == 0 ?
              <div className="flex items-end justify-center">
                <img src={noResults} className="xl:w-2/6 max-sm:w-4/6  max-sm:mt-12 w-3/6" />
              </div> : ""
            }
          </p>}
      </section >

      //displaying the search results
      <section className="py-7">
        <div className="grid  gap-8 grid-cols-1 sm:max-lg:grid-cols-2 lg:grid-cols-3">
          {movies && movies.results.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section >

      // adding next and previous at the end
      {!isLoading && <NextAndPrev movies={movies} page={page} setpage={setpage} />}
    </div >

  )
}
Search.propTypes = {
  api: PropTypes.string,
  page: PropTypes.number,
  setpage: PropTypes.func
}