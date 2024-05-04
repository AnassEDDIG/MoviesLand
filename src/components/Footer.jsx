
export const Footer = () => {
  return (
    <footer className="bg-white shadow  dark:bg-slate-900 ">
      <div className="w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between ">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()} MoviesLand. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <a href="#" target="_blank" className="hover:underline me-4 max-sm:me-2 md:me-6">
              <i className="fa-brands fa-instagram"></i> Instagram
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/anass-eddig-157247262/" target="_blank" className="hover:underline me-4 max-sm:me-2 md:me-6">
              <i className="fa-brands fa-linkedin"></i> LinKedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/AnassEDDIG" target="_blank" className="hover:underline me-4 max-sm:me-2 md:me-6">
              <i className="fa-brands fa-github"></i> Github
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="hover:underline max-sm:me-2">
              <i className="fa-solid fa-address-card"></i> Portfolio
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
