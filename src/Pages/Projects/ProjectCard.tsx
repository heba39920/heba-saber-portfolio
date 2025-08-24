import { AnimatePresence, motion } from "framer-motion";

interface ProjectCardProps {
  img?: string;
  title?: string;
  desc?: string;
  className?: string;
  demoPath?: string;
  githubPath?: string;
  short?:string;
  num?:number;

}
const ProjectCard: React.FC<ProjectCardProps> = ({
  img,
  title,
  desc,
  className,
  githubPath,
  demoPath,
  short,
  num,

}) => {
  return (

      <AnimatePresence mode="popLayout">
            <motion.div
        role="projectCard"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{delay: num,duration: .3}}
                  layout
         
      className={`shadow-[0px_20px_30px_-10px_var(--light-color)] px-5 py-1 ${className} transform transition-transform duration-200 hover:scale-110`}
    >
      <img src={img} alt="project img"  />
      <h6 className="mt-5 text-lg font-semibold">{title} <span className="text-[var(--light-color)]">({short})</span></h6>
      <p className=" mt-5 capitalize">{desc}</p>
     <div className="flex items-center justify-center  my-10 gap-5">
         <button className="text-[var(--light-color)] font-bold bg-[#222222ed] py-3 px-9 rounded-3xl border border-white">
        <a href={githubPath}>GitHub</a>
      </button>
      <button className="text-[var(--light-color)] font-bold bg-[#222222ed]  py-3 px-10 rounded-3xl border border-white">
        <a href={demoPath}>Demo</a>
      </button>
     </div>
</motion.div>
   </AnimatePresence>
  );
};
export default ProjectCard;