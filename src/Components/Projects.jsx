import "../Styles/projects.css";
import {SiGithub} from 'react-icons/si'
import {SiFastapi} from 'react-icons/si'
import {FaHeadphonesAlt} from 'react-icons/fa'
import StudyBeatsIMG from '../Images/studybeatsfm.png'

const Projects = () => {
  return (
    <div className="Projects">
      <div className="TitleContainer">
        <div className="Title">/ Portfolio</div>
        <div className="c">Fill</div>
      </div>
     
      <div className="projectsContainer">
            <div className="Project">
                <div className="ProjectTextContainer">
                    <div className="ProjectTitle">
                        StudyBeats FM <FaHeadphonesAlt size="0.7em" />
                    </div>
                    <div className="ProjectDesc">
                    A music application that combines 
                    multiple different music genres 
                    into one place. Mostly consisting 
                    off low-fidelity (Lofi), synthwave, 
                    jazz and ambient noise. Built using React, 
                    JavaScript (ES6) and the Youtube API
                    
                    </div>
                    <div className="ProjectButton">
                        <button className="DemoBTN">Live Demo  <SiFastapi className="Git" size="0.9em" /> </button> 
                        <button className="CodeBTN"> View Code <SiGithub className="Git" size="0.9em" /> </button>
                    </div>
                </div>
                <div className="ProjectIMGContainer">
                    <img className="ProjectIMG" src={StudyBeatsIMG} alt="" />
                </div>
            </div>
            <div className="Project">
                2
            </div>
            <div className="Project">
                3
            </div>
      </div>
    </div>
  );
};

export default Projects;
