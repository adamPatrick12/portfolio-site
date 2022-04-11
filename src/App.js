import Logo from "./Components/IntroLogo";
import Header from "./Components/Header"
import "./Styles/background.css";

function App() {
  return (
    <div className="App">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Logo />
      <Header/>
    </div>
  );
}

export default App;
