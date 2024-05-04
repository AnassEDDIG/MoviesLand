import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { DetailsCard, Recommendations, Trailers, Reviews } from "../components/Movie-Details"
import { useUpdateTitle, useFetch } from "../Hooks"
import { Loading } from "../components/Common"


export const MovieDetail = () => {
  //retrieving the id from the url
  const params = useParams()
  const id = params.id;
  const { data: movie, isLoading } = useFetch(`movie/${id}`)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [id])

  useUpdateTitle(movie && movie.original_title)

  return (
    <section>
      {isLoading && <Loading />}
      {!isLoading && <div>{movie && <DetailsCard movie={movie} />}</div>}
      {!isLoading && movie && <Trailers id={id} title={movie.original_title} />}
      {!isLoading && <section className="mt-20"><Recommendations id={id} /></section >}
      {!isLoading && <Reviews id={id} />}
    </section>
  )
}
