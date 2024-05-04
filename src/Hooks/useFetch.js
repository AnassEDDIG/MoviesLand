import { useState, useEffect } from "react"

export const useFetch = (path) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
        }
    };

    useEffect(() => {
        setIsLoading(true)
        const fetchMovies = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/${path}`, options);
            const json = await response.json()
            setData(json)
            setIsLoading(false)

        }
        fetchMovies()
    }, [path])
    return { data, isLoading }
}
