import { AllRoutes } from "./routes/AllRoutes"
import { Header } from "./components"
import { Footer } from "./components"

function App() {
  return (
    <div className='app bg-neutral-200'>
      <Header />
      <div className="dark:bg-slate-800 bg">
        <main>
          <AllRoutes />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
