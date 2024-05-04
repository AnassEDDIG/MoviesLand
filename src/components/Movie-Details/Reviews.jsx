import { useFetch } from "../../Hooks/useFetch"


export const Reviews = ({ id }) => {
    const { data: reviews } = useFetch(`movie/${id}/reviews`)

    return (
        <div className="mt-12 mb-8">
            <h1 className="px-6 dark:text-white text-xl"><i className="fa-solid fa-book-open"></i> Audience Reviews:</h1>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 mt-4">
                {reviews && reviews.results.slice(0, 6).map(review => (
                    <div key={review.id} className="dark:bg-slate-700 dark:text-white p-6 rounded-md max-h-96 overflow-y-auto shadow-even bg-gray-300">
                        <h1 className="font-bold text-2xl mb-4">Author: <i className="fa-solid fa-at"></i> {review.author}</h1>
                        <p className="dark:text-gray-400 text-gray-800 ">{review.content}</p>
                    </div>
                ))}
                {reviews && reviews.results.length == 0 && <h1 className="text-center dark:text-white">no reviews were found this movie <i className="fa-solid fa-face-sad-tear"></i></h1>}
            </div>
        </div>
    )
}
