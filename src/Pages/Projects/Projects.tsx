
import { p1, p2, p3, p4 } from "../../assets/images";
import ProjectCard from "./ProjectCard";


const Projects = () => {
  return (
    <div className="text-white text-center mt-30 w-[85%] mx-auto">
      <h1 className="font-semibold  text-3xl md:text-5xl my-10">
        MY LATEST <span className="text-[var(--light-color)]">PROJECTS</span>
      </h1>
      <p className="text-xl capitalize">feel free to browse my work</p>
      <div className="mt-20 grid grid-cols-2 justify-center items-center gap-12">

        
    <ProjectCard 
          img={p1}
          title="Quiz App"
          className="md:col-span-1 col-span-2 "
          demoPath="https://heba39920.github.io/Quiz-App/"
          githubPath="https://github.com/heba39920/Quiz-App"
          short="QA"
          desc="A secure, instructor-driven platform that streamlines the creation, administration, and evaluation of quizzes. It emphasizes robust access control, real-time communication, and transparent student progress tracking."
          num={.3}
        />
    
        <ProjectCard
          img={p2}
          title="Hotel Management System"
           className="md:col-span-1 col-span-2"
          demoPath="https://asmaa-jsb.github.io/hotel-managemnt/"
          githubPath="https://github.com/asmaa-jsb/hotel-managemnt"
          short="HMS"
          desc="A secure, end-to-end hotel operations platform that handles guest management, booking, and payments with a focus on ease of use for staff and a smooth experience for guests."
          num={.5}
        />
        <ProjectCard
          img={p3}
          title="Project Management System"
            className="md:col-span-1 col-span-2"
          demoPath="https://shima2468.github.io/PMS-Project/"
          githubPath="https://github.com/shima2468/PMS-Project/tree/Main-Development"
          short="PMS"
          desc="A collaborative workspace for teams to plan, track, and deliver projects. The system supports hierarchical roles, project governance, and agile-style task management."
          num={.9}
        />
        <ProjectCard
          img={p4}
          title="Food Management System"
          className="md:col-span-1 col-span-2"
          demoPath="https://heba39920.github.io/foodApp/"
          githubPath="https://github.com/heba39920/foodApp"
          short="FMS"
          desc="A comprehensive platform for recipe-centric food management that bridges content creation with user exploration and discovery."
          num={1.1}
        />
      </div>
    </div>
  );
};

export default Projects;
