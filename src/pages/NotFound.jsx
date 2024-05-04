import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import notFound from "../assets/notfound.png"
import garry from "../assets/garry.png"

export const NotFound = () => {

  const navigate = useNavigate()
  useEffect(() => {
    document.title = "Page Not Found"
  })

  return (
    <div className="flex items-center justify-center relative max-sm:flex-col">
      <div className="flex flex-col items-center justify-center gap-3 ">
        <img src={garry} alt="" className="max-lg:w-3/6" />
        <p className="dark:text-white not-Found max-md:text-xs">Your Lost Again ! Click On Jeffry He Will Take You Home</p>
      </div>
      <img onClick={() => navigate("/")} src={notFound} alt="" className="w-2/6 cursor-pointer max-sm:w-4/6" />
    </div>
  )
}
