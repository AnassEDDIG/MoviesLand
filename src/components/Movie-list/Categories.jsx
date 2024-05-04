import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { useFetch } from "../../Hooks/useFetch"
import { settings } from "..";

export const Categories = ({ setFilter }) => {
    //retrieving the data 
    const { data: categories, isLoading } = useFetch(`genre/movie/list?language=en`)

    //overriding the intial settings to increase slides number and hide dots
    const trSettings = {
        ...settings,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
    }

    const slider = useRef(null)

    // creating the auto-scroll slides behavior
    useEffect(() => {
        const trend = setInterval(() => {
            slider?.current?.slickNext()
        }, 5000)
        return () => clearInterval(trend)
    })

    return (
        <div className="mb-8  " >
            {!isLoading &&
                <div className="relative">
                    <button className="mb-4 border text-sm dark:text-white p-2 border-gray-300 shadow-md rounded-md ms-12"
                        onClick={() => setFilter(false)}>
                        Reset filter <i className="fa-regular fa-trash-can"></i>
                    </button>
                    <ul className="grid grid-cols-1 text-center px-12">
                        <Slider {...trSettings} ref={slider} >
                            {categories && categories.genres.map((categorie) => (
                                <li onClick={() => setFilter(categorie.id)}
                                    className="border cursor-pointer px-4 py-2 rounded-md font-bold text-white categories"
                                    key={categorie.id} >
                                    {categorie.name}
                                </li>
                            ))}
                        </Slider>
                    </ul>
                </div>
            }
        </div>
    )
}
