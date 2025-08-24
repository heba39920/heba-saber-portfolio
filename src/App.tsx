import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { About, Home, NotFound, Projects, Resume } from "./Pages"
import MasterLayout from "./Components/MasterLayout/MasterLayout"




function App() {
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
