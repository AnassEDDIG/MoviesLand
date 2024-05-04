
export const FilterFields = (props) => {
    return (
        <div className={`${props.hidden ? 'hidden' : "grid"} grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 my-4 items-center relative max-sm:px-6`}>
             {/* Genre field */}
            <div className="flex flex-col">
                <label htmlFor="genre" className="ps-1">Genre</label>
                <select name="genre" id="genre" defaultValue="" ref={props.genre} className="p-1 bg-gray-300  dark:bg-slate-600 dark:text-white px-4 rounded-lg outline-none">
                    <option disabled value="" > -- select a Genre -- </option>
                    {props.categories && props.categories.genres.map(gen => (
                        <option key={gen.id} value={gen.id}>{gen.name}</option>
                    ))}
                </select>
            </div>

            {/* Rating Field */}
            <div className="flex flex-col">
                <label htmlFor="rating" className="ps-1">Rating</label>
                <input type="number" placeholder="rating of the movie" ref={props.rating} min={0} max={10} id="rating" className="p-2 px-4 bg-gray-300 dark:bg-slate-600 dark:text-white rounded-lg outline-none" />
            </div>

            {/* duration Field */}
            <div className="flex flex-col">
                <label htmlFor="duration" className="ps-1">Duration (min)</label>
                <input type="number" placeholder="duration of the movie" ref={props.dur} id="duration" min={1} max={400} className="p-2 bg-gray-300  dark:bg-slate-600 dark:text-white px-4 rounded-lg outline-none" />
            </div>

            {/* Language Field */}
            <div className="flex flex-col">
                <label htmlFor="language" className="ps-1">Language</label>
                <select name="language" defaultValue="" ref={props.lang} id="language" className="p-1 px-4 bg-gray-300  dark:bg-slate-600 dark:text-white rounded-lg outline-none">
                    <option disabled value="" > -- select a language -- </option>
                    <option value="en-US">English </option>
                    <option value="es-ES">Spanish </option>
                    <option value="fr-FR">French </option>
                    <option value="ja-JP">Japanese </option>
                    <option value="ar-EG">Arabic </option>
                    <option value="zh-CN">Chinese </option>
                </select>
            </div>

            {/* Explicit Scenes Field */}
            <div className="flex flex-col">
                <label htmlFor="scenes" className="ps-1">+18 scenes</label>
                <select name="scenes" id="scenes" ref={props.scenes} className="p-1 bg-gray-300 px-4  dark:bg-slate-600 dark:text-white rounded-lg outline-none">
                    <option value={false}>No</option>
                    <option value={true}>yes</option>
                </select>
            </div>

            {/* date Field */}
            <div className="flex flex-col">
                <label htmlFor="date" className="ps-1">release Date</label>
                <input type="number" min={1900} max={2080} step="1" ref={props.date} placeholder="Specify the movie Year" id="date" className="p-2 bg-gray-300  dark:bg-slate-600 dark:text-white px-4 rounded-lg outline-none" />
            </div>
        </div>
    )
}

