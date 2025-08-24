
import { FaCloudDownloadAlt } from "react-icons/fa"
import CV from "../../assets/Heba Saber Eid-Frontend Developer(React)  CV.pdf"
import { RPProvider, RPDefaultLayout, RPPages, RPConfig } from '@pdf-viewer/react'
import { AnimatePresence , motion } from "framer-motion"

const Resume = () => {
 
  return (
    <section className="mt-20 text-center">
       <AnimatePresence mode="popLayout">
<motion.button  
  role="projectCard"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{delay: .5 ,duration: .3}}
                  layout
  className="text-[var(--light-color)] font-bold bg-[#222222ed] my-10 py-5 px-10 rounded-3xl border border-white">
          <a
   href= {CV}
   download={CV}
className="flex items-center gap-2"
    >
      <FaCloudDownloadAlt size={20} />
 DownLoad CV
    </a>
</motion.button>
</AnimatePresence>
  <AnimatePresence mode="popLayout">
         <motion.div
        role="projectCard"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{delay: .9 ,duration: .3}}
                  layout className=" flex justify-center">
  
     <RPConfig >
      <RPProvider src={CV}>
        <RPDefaultLayout className="w-[600px] h-[660px] " mobileWidth={0}>
          <RPPages />
        </RPDefaultLayout>
      </RPProvider>
    </RPConfig>
</motion.div>
</AnimatePresence>
    </section>


  )
}

export default Resume
