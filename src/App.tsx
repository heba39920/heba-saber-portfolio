import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home, NotFound } from "./Pages"
import MasterLayout from "./Components/MasterLayout/MasterLayout"



function App() {
  const routes = createBrowserRouter([
    {
        path: "/",
        element: <MasterLayout/>,
        errorElement: <NotFound/>,
        children: [
         {index: true , element: <Home/>},
         {path: "home" , element: <Home/>}

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
