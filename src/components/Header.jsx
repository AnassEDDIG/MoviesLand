import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { LargeScreensNav, SmallScreensNav } from "./Header-Comp"
import logo from "../assets/logo.png"


export const Header = () => {
  //state to mange burger menu behavior
  const [hidden, setHidden] = useState(true)

  const [darkmode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false)
  const navigate = useNavigate()

  //saving the user prefered theme in the browser
  useEffect(() => {
    localStorage.setItem('darkMode', darkmode);
    if (darkmode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkmode]);

  //handeling the search logic of the search input
  const handleSubmit = (e) => {
    e.preventDefault()
    const query = e.target.search.value
    if (query != "") {
      e.target.reset()
      return navigate(`/search?q=${query}`)
    }
    return false
  }

  return (
    <header className="border-b-2 border-gray-300 boder-solid dark:border-slate-700 sticky top-0 z-10" >
      <nav className="flex text-white items-center bg-gray-200 justify-between dark:bg-slate-900 px-4 py-6 ">
        
        <Link to="/" className="flex items-center  ">
          <img src={logo} className="h-10" alt="MoviesLand Logo" />
          <span className="block font-meduim text-xl lg:max-xl:text-lg">MoviesLand</span>
        </Link>
  
        <LargeScreensNav />

        {/* button to toggle darkmode and the search input */}
        <div className="hidden relative lg:flex items-center">
          <button onClick={() => setDarkMode(!darkmode)} className=" flex items-center justify-center  border-2 border-gray-400 h-9 w-9 border-solid bg-slate-900 hover:brightness-125 text-white rounded-circle">
            {darkmode ?
              <i className="sun fa-solid fa-sun text-golden pointer-events-none"></i> :
              <i className="fa-regular fa-moon pointer-events-none "></i>}
          </button>
          <form onSubmit={handleSubmit}>
            <i className="fa-solid fa-magnifying-glass relative left-6  text-black dark:text-white"></i>
            <input type="text" autoComplete="off" placeholder="Search..." name="search"
              className="py-1.5 ps-7 rounded-3xl outline-none border-2 border-gray-400 dark:bg-slate-800 dark:text-white bg-gray-200 border-solid text-black"
            />
          </form>
        </div>

        {/* button to toggle burger menu and search also dark mode */}
        <div className="flex space-x-6 max-lg:text-base lg:hidden max-sm:space-x-3 max-sm:text-base">
          <button onClick={() => setDarkMode(!darkmode)} className=" flex items-center justify-center  border-2 dark:border-gray-800 border-gray-300 h-9 w-9 border-solid bg-slate-900 md:hover:bg-slate-700 text-white rounded-circle">
            {darkmode ?
              <i className="sun fa-solid fa-sun text-golden pointer-events-none"></i> :
              <i className="fa-regular fa-moon pointer-events-none "></i>}
          </button>
          <button onClick={() => setHidden(!hidden)} className="block lg:hidden"><i className="fa-solid fa-magnifying-glass dark:text-gray-400"></i></button>
          <button onClick={() => setHidden(!hidden)} className="block lg:hidden"><i className="fa-solid fa-bars dark:text-gray-400"></i></button>
        </div>

      </nav>

      <SmallScreensNav handleSubmit={handleSubmit} hidden={hidden} />
    </header >
  )
}
