import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
     <AnimatePresence mode="popLayout">
    <motion.section 
       
            
        role="projectCard"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{delay: 1.3,duration: .3}}
                  layout aria-label="Contact information" className="mt-12 text-center">
      <div className="border-t-2 border-[#ffffffd5] w-[20%] mx-auto my-20" aria-hidden="true" />

      <h2 className="text-2xl md:text-4xl font-bold" aria-label="Let’s connect and collaborate">
        Let’s connect and{" "}
        <span className="text-[var(--light-color)]">collab!</span>
      </h2>

      <p className="text-lg mt-5 font-semibold" aria-label="Invitation to connect">
        Don’t hesitate to reach out -{" "}
        <span className="text-[var(--light-color)]">happy to connect.</span>
      </p>

      <ul className="flex gap-8 justify-center mt-10 list-none p-0 m-0" aria-label="Contact methods">
        <li>
          <a href="https://www.linkedin.com/in/heba-saber-377033235" aria-label="LinkedIn profile">
            <FaLinkedin
              size={45}
              role="img"
              aria-label="LinkedIn"
              className="bg-[var(--primary-color)] rounded-full p-2 text-[var(--light-color)]"
            />
          </a>
        </li>

        <li>
          <a href="https://github.com/heba39920/" aria-label="GitHub profile">
            <FaGithub
              size={45}
              role="img"
              aria-label="GitHub"
              className="bg-[var(--primary-color)] rounded-full p-2 text-[var(--light-color)]"
            />
          </a>
        </li>

        <li>
          <a href="mailto:hbhsabr47@gmail.com" aria-label="Email me">
            <MdEmail
              size={45}
              role="img"
              aria-label="Email"
              className="bg-[var(--primary-color)] rounded-full p-2 text-[var(--light-color)]"
            />
          </a>
        </li>

        <li>
          <a href="tel:+201150575025" aria-label="Call me" title="Call me">
            <FaPhoneAlt
              size={45}
              role="img"
              aria-label="Phone"
              className="bg-[var(--primary-color)] rounded-full p-2 text-[var(--light-color)]"
            />
          </a>
        </li>
      </ul>
</motion.section>
    </AnimatePresence>
  );
};

export default Contact;