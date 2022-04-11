import "../Styles/Hero.css"
import Memoji from "../Images/character.png"

const Hero = () => {
    return (
        <div className="HeroContainer">
            <div className="HeroTextContainer">
                <div className="WaveContainer">
                    <div className="Greeting">
                        Hey There!
                    </div>
                    <div className="Wave">
                    👋🏽
                    </div>
                </div>
                <div className="APContainer">
                    <div className="IM">
                    I'M
                    </div>
                    <div className="AP">
                    ADAM PATRICK
                    </div>
                </div>
                <div className="About">
                A software developer 
                based in Toronto. I have 
                great interest in Front-end development, 
                Game development, Blockchian technology, 
                and everything in between.
                </div>
            </div>
            <div className="Emoji">
                <img src={Memoji} alt="" />
            </div>
        </div>
    )
}

export default Hero

