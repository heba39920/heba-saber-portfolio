import { AnimatePresence, motion } from "framer-motion";
import type { JSX } from "react";
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiMui, SiRedux, SiSass, SiTailwindcss, SiTypescript } from "react-icons/si";
interface SkillProps {
  label?: string;
  icon?: JSX.Element;
  num?: number;
}
 const Skills = () => {

  return (
    <div className="text-center mt-30">
      <h2 className="text-5xl font-bold">
        Professional
        <span className="text-[var(--light-color)]"> Skills</span>
      </h2>
      <div className="flex flex-wrap capitalize mt-10 gap-8">
       <Skill icon={<FaHtml5 size={60} />} label="HTML5"  num={.7}/>
        <Skill icon={<FaJs size={60} />} label="javascript" num={.9} />
        <Skill icon={<FaReact size={60} />} label="React" num={1.1}/>{" "}
        <Skill icon={<FaCss3 size={60} />} label="Css3" num={1.3} />{" "}
        <Skill icon={<SiTypescript size={60} />} label="Typescript" num={1.5}/>
        <Skill icon={<RiNextjsFill size={60} />} label="Next JS" num={1.7}/>
        <Skill icon={<SiRedux size={60} />} label="Redux" num={1.9}/>
        <Skill icon={<FaBootstrap size={60} />} label="Bootstrap" num={2.1}/>
        <Skill icon={<SiMui size={60} />} label="MUI" num={2.3}/>
        <Skill icon={<SiTailwindcss size={60} />} label="Tailwind css" num={2.5}/>
            <Skill icon={<SiSass size={60} />} label="Sass" num={2.7}/>
      </div>
    </div>
  );
};

export default Skills;

 export const Skill: React.FC<SkillProps> = ({ label, icon, num }) => {
    return (
       <AnimatePresence mode="popLayout">
         <motion.div
        role="projectCard"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{delay: num ,duration: .3}}
                  layout className="transform transition-transform duration-200 hover:scale-110 flex flex-col items-center flex-1/6 bg-[#222222ed] px-15 py-10 rounded-4xl border-1 border-[var(--light-color)]">
        <div className="text-[var(--light-color)] mb-5">{icon}</div>
        <h6 className="text-lg">{label}</h6>
      </motion.div>
      </AnimatePresence>
    );
  };