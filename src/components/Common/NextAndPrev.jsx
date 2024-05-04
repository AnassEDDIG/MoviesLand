

export const NextAndPrev = ({ movies, page, setpage }) => {
    return (
        <div>
            {movies && movies.results.length > 0 ? < div className="justify-center items-center mt-7 flex gap-4 dark:text-white">
                <button className="border py-2 px-4 rounded-md hover:bg-slate-400 hover:text-slate-800" onClick={() => page > 1 ? setpage(prev => prev - 1) : ""}><i className="fa-solid fa-backward"></i> Previous</button>
                <p className="cursor-pointer font-bold" onClick={() => setpage(1)}>Current Page : {page}/{movies.total_pages}</p>
                <button className={`${page == movies.total_pages ? "pointer-events-none cursor-not-allowed" : "block"} border py-2 px-4 rounded-md hover:bg-slate-400 hover:text-slate-800`} onClick={() => setpage(prev => prev + 1)}>Next <i className="fa-solid fa-forward"></i></button>
            </div > : ""}
        </div>
    )
}
