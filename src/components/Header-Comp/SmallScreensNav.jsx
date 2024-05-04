import { NavLink } from "react-router-dom"

export const SmallScreensNav = ({ handleSubmit, hidden }) => {

    //dynamic styling based on the active class provided via the Navlink
    const activeClass = "block relative text-golden scale-110"
    const inactiveClass = "block transition-transform duration-300 hover:text-golden hover:scale-110"

    return (
        <div className={`${hidden ? "hidden" : "flex"} flex-col items-center p-4 gap-4 dark:bg-slate-900 lg:hidden bg-gray-200 max-sm:pe-4 `}>
            <form onSubmit={handleSubmit} className="flex w-11/12 items-center relative">
                <button type="submit" className="absolute right-3"><i className="fa-solid fa-magnifying-glass  dark:text-white"></i></button>
                <input type="text" autoComplete="off" placeholder="Search..." name="search"
                    className="py-1.5 ps-4  rounded-3xl outline-none justify-start text-black dark:text-white dark:bg-slate-800 border border-gray-400 border-solid w-full"
                />
            </form>
            <ul className="grid rounded-md w-11/12 border border-gray-400  border-solid gap-4 grid-cols-1 text-center bg-gray-100 dark:bg-slate-800 text-white text-xl p-4 hidden-menu">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inactiveClass} end>
                        <i className="fa-solid fa-house "></i> Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/movie/popular" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                        <i className="fa-solid fa-fire-flame-curved "></i> Popular
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/movie/top" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                        <i className="fa-solid fa-ranking-star"></i> Top Rated
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/movie/upcoming" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                        <i className="fa-solid fa-clapperboard"></i> Upcoming
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/movie/discover" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                        <i className="fa-solid fa-wand-magic-sparkles"></i> Discover
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
