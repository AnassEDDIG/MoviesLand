import React from 'react'
import { useFetch } from '../../Hooks/useFetch'
import { settings } from "..";


export const Trailers = ({ id }) => {
    const { data: videos } = useFetch(`movie/${id}/videos?language=en-US`)

    return (
        <div className='mt-24 max-sm:px-6 lg:px-12 '>
            <h1 className='dark:text-white text-xl'><i className="fa-solid fa-clapperboard text-red-600"></i> Trailers and Clips for this Movie:</h1>
            {videos &&
                <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-14 max-lg:gap-4 xl:gap-20 mt-4 sm:max-lg:px-12">
                    {videos.length > 0 ? videos.slice(0, 3).map((clp) => (
                        <iframe
                            className='max-lg:mx-auto max-lg:w-full max-lg:h-72 rounded-md shadow-even w-96 h-56 lg:max-xl:w-64 lg:max-xl:h-48 '
                            key={clp.id}
                            src={`https://www.youtube.com/embed/${clp.key}`}
                            allowFullScreen
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        />
                    )) : <h1 className='dark:text-white'>Sorry No Trailers Were Found <i className="fa-solid fa-face-sad-tear"></i></h1>}
                </div>
            }
        </div >
    )
}
