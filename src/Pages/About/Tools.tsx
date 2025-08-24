import { FaCcStripe, FaGithub } from "react-icons/fa";
import { Skill } from "./Skills";
import { SiPostman, SiSwagger } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Tools = () => {
  return (
    <div className="text-center mt-30">
      <h2 className="text-5xl font-bold">
        <span className="text-[var(--light-color)]"> Tools</span>
      </h2>
      <div className="flex flex-wrap capitalize mt-10 gap-8">
        <Skill icon={<FaGithub size={60} />} label="Github" num={2.9}/>
        <Skill icon={<SiPostman size={60} />} label="Postman" num={3.1} />
        <Skill icon={<SiSwagger size={60} />} label="Swagger" num={3.3}/>
        <Skill icon={<FaCcStripe size={60} />} label="Stripe" num={3.5}/>
        <Skill icon={<VscVscode size={60} />} label="Vscode" num={3.7}/>
      </div>
    </div>
  );
};

export default Tools;
