import "../Styles/projects.css";
import {SiGithub} from 'react-icons/si'
import {SiFastapi} from 'react-icons/si'
import {SiHiveBlockchain} from 'react-icons/si'
import {TiWeatherStormy} from 'react-icons/ti'
import {FaHeadphonesAlt} from 'react-icons/fa'
import WeatherIMG from '../Images/weather.png'
import StudyBeatsIMG from '../Images/studybeatsfm.png'
import NFTStoreIMG from '../Images/nftstore.png'

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
                    of low-fidelity (Lofi), synthwave, 
                    jazz and ambient noise. Built using React, 
                    JavaScript (ES6) and the Youtube API
                    
                    </div>
                    <div className="ProjectButton">
                        <button onClick={()=> window.open("https://studybeatsfm.netlify.app/", "_blank")} className="DemoBTN">Live Demo  <SiFastapi className="Git" size="0.9em" /> </button> 
                        <button onClick={()=> window.open("https://github.com/adamPatrick12/study-beats-fm", "_blank")} className="CodeBTN"> View Code <SiGithub className="Git" size="0.9em" /> </button>
                    </div>
                </div>
                <div className="ProjectIMGContainer">
                    <img className="ProjectIMG" src={StudyBeatsIMG} alt="" />
                </div>
            </div>
            <div className="Project">
            <div className="ProjectTextContainer">
                    <div className="NFT-Title">
                        NFT Store <SiHiveBlockchain size="0.7em" />
                    </div>
                    <div className="ProjectDesc">
                    An app that provides various NFT data 
                    like the market cap, number of owners, 
                    7-day trading volume, and the floor price 
                    for various NFT collections. Built with React, 
                    Framer Motion and the Opensea API
                    
                    </div>
                    <div className="ProjectButton">
                        <button onClick={()=> window.open("https://adampatrick12.github.io/nft-shop/#/items", "_blank")} className="DemoBTN">Live Demo  <SiFastapi className="Git" size="0.9em" /> </button> 
                        <button onClick={()=> window.open("https://github.com/adamPatrick12/nft-shop", "_blank")} className="CodeBTN"> View Code <SiGithub className="Git" size="0.9em" /> </button>
                    </div>
                </div>
                <div className="ProjectIMGContainer">
                    <img className="ProjectIMG" src={NFTStoreIMG} alt="" />
                </div>
            </div>
            <div className="Project">
            <div className="ProjectTextContainer">
                    <div className="WeatherTitle">
                        Weather App <TiWeatherStormy size="0.7em" />
                    </div>
                    <div className="ProjectDesc">
                    Dynamically displayed various location data like 
                    humidity, wind speed, air pressure and sunset time. 
                    Built with Bootstrap/JavaScript using the mobile-first 
                    design approach.
                    
                    </div>
                    <div className="ProjectButton">
                        <button onClick={()=> window.open("https://apatrickweather.netlify.app/", "_blank")} className="DemoBTN">Live Demo  <SiFastapi className="Git" size="0.9em" /> </button> 
                        <button onClick={()=> window.open("https://github.com/adamPatrick12/Weather-App", "_blank")} className="CodeBTN"> View Code <SiGithub className="Git" size="0.9em" /> </button>
                    </div>
                </div>
                <div className="ProjectIMGContainer">
                    <img className="ProjectIMG" src={WeatherIMG} alt="" />
                </div>
            </div>
      </div>
    </div>
  );
};

export default Projects;
