import "../Styles/projects.css";
import '../Styles/contact.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {BiMailSend} from 'react-icons/bi'

const Contact = () => {
  return (
    <div className="ContactMainContainer">
      <div className="TitleContainer">
        <div className="Title">/ Contact</div>
        <div className="c">Fill</div>
      </div>
      <div className="ContactContainer">
            <div className="ContactInfo">
                <div className="Find">
                    FIND ME ON
                </div>
                <div className="Links">
                    <div onClick={()=> window.open("https://www.linkedin.com/in/adam-s-patrick/", "_blank")} className="Circle">
                        <FaLinkedinIn onClick={()=> window.open("https://www.linkedin.com/in/adam-s-patrick/", "_blank")} className="Link"/>
                    </div>
                    <div onClick={()=> window.open("https://github.com/adamPatrick12", "_blank")} className="Circle">
                        <AiFillGithub onClick={()=> window.open("https://github.com/adamPatrick12", "_blank")} className="Link"/>
                    </div>
                    <div onClick={()=> window.open("mailto:adampatrick416@gmail.com", "_blank")} className="Circle">
                        <BiMailSend onClick={()=> window.open("mailto:adampatrick416@gmail.com", "_blank")} className="Link"/>
                    </div>
                </div>
                <div className="Connect">
                    <div className="Free">
                        Feel free to 
                    </div>
                    <div onClick={()=> window.open("https://www.linkedin.com/in/adam-s-patrick/", "_blank")} className="ConnectLink">
                        connect
                    </div>
                    <div className="Me">
                        with me
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Contact