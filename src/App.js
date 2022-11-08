import Logo from "./Components/IntroLogo";
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Project from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import "./Styles/background.css";
import Footer from "./Components/Footer";
import Experience from "./Components/Experience";


function App() {
  
 
  
  return (
    <div className="App">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Logo />
      <Header/>
      <Hero/>
      <Experience/>
      <Project/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
