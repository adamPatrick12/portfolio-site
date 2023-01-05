import "../Styles/projects.css";
import "../Styles/skills.css";
import GM from "../Images/GameMaker_Logo_WhiteTransparent.png";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { FaUnity } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { DiPhotoshop } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

const Skills = () => {
  return (
    <div className="SkillsMainContainer">
      <div className="TitleContainer">
        <div className="Title">/ Skills</div>
        <div className="c">Fill</div>
      </div>
      <div className="SkillsContainer">
        <div className="Coding">
          <div className="SubTitle">Coding</div>
          <div className="SkillsBoxContainer">
            <div className="SkillsBox">
              <FaReact className="skill" />
            </div>
            <div className="SkillsBox">
              <IoLogoJavascript className="skill" />
            </div>
            <div className="SkillsBox">
              <FaPython className="skill" />
            </div>
            <div className="SkillsBox">
              <DiNodejs className="skill" />
            </div>
            <div className="SkillsBox">
              <FaGitAlt className="skill" />
            </div>
            <div className="SkillsBox">
              <SiNetlify className="skill" />
            </div>
            <div className="SkillsBox">
              <SiTypescript className="skill" />
            </div>
          </div>
        </div>
        <div className="GameDesign">
          <div className="SubTitle">Game Dev/Design</div>
          <div className="SkillsBoxContainer">
            <div className="SkillsBox">
              <FaUnity className="skill" />
            </div>
            <div className="SkillsBox">
              <img src={GM} alt="" />
            </div>
            <div className="SkillsBox">
              <CgFigma className="skill" />
            </div>
            <div className="SkillsBox">
              <DiPhotoshop className="skill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
