import { AnimatePresence , motion} from "framer-motion"
import { profileImg } from "../../assets/images"

const Hero = () => {
  return (
    <section aria-label="Hero" className="grid grid-cols-4 gap-20 items-center mt-10 ">
      {/* Text content */}
       <AnimatePresence mode="popLayout">
         <motion.div
        role="projectCard"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{delay: .2 ,duration: .3}}
                  layout className="order-2 lg:order-1  col-span-4 lg:col-span-3 text-center lg:text-start font-bold">
        <h1 className="text-shadow-lg text-shadow-teal-800 text-3xl md:text-5xl">
          THIS IS <span className="text-[var(--light-color)]">HEBA SABER.</span>
        </h1>
        <p className="text-xl md:text-3xl mt-6 text-shadow-lg text-shadow-teal-800 text-[var(--light-color)]">
          Frontend Web Developer
        </p>
    </motion.div>
</AnimatePresence>
      {/* Profile image with accessible alt text and responsive styling */}
     <AnimatePresence mode="popLayout">
         <motion.div
        role="projectCard"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{delay: .5 ,duration: .3}}
                  layout className="relative order-1 lg:order-2 col-span-4 lg:col-span-1 mx-auto" aria-label="Profile image">
        <div className="absolute inset-0 border-2 border-white" aria-hidden="true" />
        <div className="-translate-x-5 translate-y-5 md:-translate-x-10 md:translate-y-10 overflow-hidden">
          <img
            src={profileImg}
            alt="Profile image of Heba Saber, FrontEnd Web Developer"
            className="bg-[var(--light-color)] w-full h-full object-cover "
            loading="eager"
          /> 
      </div>
       </motion.div> 
         </AnimatePresence>
    </section>  
  )
}

export default Hero