import "../Styles/header.css";
import HeadLogo from "./HeaderLogo";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderLogo">
        <div className="Logo">
          <HeadLogo />
        </div>
      </div>
      <div className="Navigation">
        <h2 className="Nav">
          <Link to="work" smooth={true}>
            /Experience
          </Link>
        </h2>
        <h2 className="Nav">
          <Link to="projects" smooth={true}>
            /Portfolio
          </Link>
        </h2>
        <h2 className="Nav">
          <Link to="skills" smooth={true}>
            /Skills
          </Link>
        </h2>
        <h2 className="Nav">
          <Link to="contact" smooth={true}>
            /Contact
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Header;
