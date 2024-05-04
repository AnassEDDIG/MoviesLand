import { NavLink } from "react-router-dom"

export const LargeScreensNav = () => {
    
    //dynamic styling based on the active class provided via the Navlink
    const activeClass = "block relative text-golden scale-110"
    const inactiveClass = "block transition-transform duration-300 hover:text-golden hover:scale-110"

    return (
        <div className="hidden lg:block lg:max-xl:text-sm" >
            <ul className="flex items-end gap-8  lg:max-xl:gap-6">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inactiveClass} end><i className="fa-solid fa-house "></i> Home</NavLink>
                </li>
                <li>
                    <NavLink to="/movie/popular" className={({ isActive }) => isActive ? activeClass : inactiveClass}><i className="fa-solid fa-fire-flame-curved "></i> Popular</NavLink>
                </li>
                <li>
                    <NavLink to="/movie/top" className={({ isActive }) => isActive ? activeClass : inactiveClass}><i className="fa-solid fa-ranking-star"></i> Top Rated</NavLink>
                </li>
                <li>
                    <NavLink to="/movie/upcoming" className={({ isActive }) => isActive ? activeClass : inactiveClass}><i className="fa-solid fa-clapperboard"></i> Upcoming</NavLink>
                </li>
                <li>
                    <NavLink to="/movie/discover" className={({ isActive }) => isActive ? activeClass : inactiveClass}><i className="fa-solid fa-wand-magic-sparkles"></i> Discover</NavLink>
                </li>
            </ul>
        </div>
    )
}
