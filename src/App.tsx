import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { About, Home, NotFound, Projects, Resume } from "./Pages"
import MasterLayout from "./Components/MasterLayout/MasterLayout"
import { useEffect, useState } from "react"
import Loader from "./Components/Loader/Loader";




function App() {
     const [loading, setLoading] = useState(true);
   
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading){
     return <Loader loading={loading}/>
  }
  const routes = createBrowserRouter([
    {
        path: "/",
        element: <MasterLayout/>,
        errorElement: <NotFound/>,
        children: [
         {index: true , element: <Home/>},
         {path: "home" , element: <Home/>},
         {path: "about" , element: <About/>},
         {path: "projects" , element: <Projects/>},
         {path: "resume" , element: <Resume/>},

         

        ],
      }
  ],
    {
      basename: "/heba-saber-portfolio/",
    })

  return (
   <RouterProvider router={routes} />
  )
}

export default App
