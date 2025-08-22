import Contact from "./Contact"
import Hero from "./Hero"
import Introduction from "./Introduction"


const Home = () => {
  return ( 
    <div className="w-[80%] mx-auto text-white mt-30">
     <Hero/>
     <Introduction/>
     <Contact/>
    </div>
  )
}

export default Home
