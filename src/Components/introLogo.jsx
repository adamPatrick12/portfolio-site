import "../Styles/Intro.css";
import React,  {useEffect} from 'react'

const IntroLogo = () => {
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="IntroBG">
      <div className="logoContainer">
        <svg
          id="introLogo"
          width="204"
          height="141"
          viewBox="0 0 204 141"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.4 135H94L51.6 18.4L6.99998 141H0.599976L51.6 0.799988L102.6 141H20.4V135Z"
            stroke="#DFD498"
            stroke-width={2}
          />
          <path
            d="M175.58 73.8L172.58 68.6L183.78 62.2C192.98 57.1333 197.58 49.0667 197.58 38C197.58 17.3333 181.846 6.99999 150.38 6.99999H131.98V141H125.98V0.999989H150.38C167.98 0.999989 181.246 4.26665 190.18 10.8C199.113 17.2 203.58 26.2667 203.58 38C203.58 51.3333 197.98 61.1333 186.78 67.4L175.58 73.8Z"
            stroke="#DFD498"
            stroke-width={2}
          />
        </svg>
      </div>
    </div>
  );
};

export default IntroLogo;
