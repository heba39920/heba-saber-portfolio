
import { AnimatePresence, motion } from "framer-motion";
import { profileImg2 } from "../../assets/images";

const AboutMe = () => {
  return (
     <div className="flex flex-wrap lg:gap-50 gap-10 items-center justify-between  capitalize text-center md:text-start">
         <AnimatePresence mode="popLayout">
         <motion.div
        role="projectCard"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{delay: .2 ,duration: .3}}
                  layout className="flex-1/2 order-2 lg:order-1">
        <h1 className="font-semibold  text-3xl md:text-5xl my-10">
          KNOW MORE{" "}
          <span className="text-[var(--light-color)]">ABOUT ME 🌚</span>
        </h1>
        <p className="text-lg">
          <p className="my-10">
            {" "}
            Hello, I’m Heba Saber — a Frontend Developer from Egypt. I shifted
            from Education to programming because  <span className="text-[var(--light-color)] font-bold">I’m passionate about code and
            love turning ideas into interactive experiences. I can spend hours
            coding, learning through courses, and building real projects that
            solve problems.</span>
          </p>
          <ul>
            <li> <span className="text-[var(--light-color)] font-bold">Experience : </span> ~2 years in frontend development</li>
            <li className="my-8">
              {" "}
            <span className="text-[var(--light-color)] font-bold">  What I do : </span> Designing and implementing user interfaces, writing
              clean, maintainable code, and continuously learning new tech.
            </li>
            <li >
              {" "}
            <span className="text-[var(--light-color)] font-bold">  Approach :</span> Curious, persistent, and always aiming to have fun while
              delivering quality work .
            </li>
            <li className="mt-8">
              {" "}
            <span className="text-[var(--light-color)] font-bold">  Beyond coding : </span> I enjoy singing, watching series and TV shows, and
              I’m always eager to connect, learn, and collaborate.
            </li>
            <li className="my-8">
            <span className="text-[var(--light-color)] font-bold"> Open to : </span> New opportunities, freelance gigs, and collaborations.
            </li>
            <li>
            <span className="text-[var(--light-color)] font-bold"> Mindset : </span>  Avoid routines, embrace growth, and chase my dreams
            </li>
          </ul>
        </p>
   </motion.div>
   </AnimatePresence>
      <AnimatePresence mode="popLayout">
         <motion.div
        role="projectCard"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{delay: .5 ,duration: .3}}
                  layout  className=" order-1 lg:order-2  rounded-tl-[100px] rounded-br-[100px] border-1 border-[#f1f1f1f1]  mx-auto">
        <img
          src={profileImg2}
          className="flex-1/2  rounded-tl-[100px] rounded-br-[100px] h-[450px] border-4 border-[#222222]"
          alt=""
        />
     </motion.div>
     </AnimatePresence>
    </div>
  )
}

export default AboutMe
