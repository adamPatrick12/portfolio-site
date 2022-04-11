import Logo from "./Components/IntroLogo";
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import "./Styles/background.css";

function App() {
  return (
    <div className="App">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Logo />
      <Header/>
      <Hero/>
    </div>
  );
}

export default App;
