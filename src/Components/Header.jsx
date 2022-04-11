import '../Styles/header.css'
import HeadLogo from './HeaderLogo'

const Header = () => {
    return (
        <div className="Header">
            <div className="HeaderLogo">
                <div className="Logo">
                    <HeadLogo/>
                </div>
            </div>
            <div className="Navigation">
                <h2 className="Nav">
                    /About
                </h2>
                <h2 className='Nav'>
                    /Portfolio
                </h2>
                <h2 className='Nav'>
                    /Skills
                </h2>
                <h2 className='Nav'>
                    /Contact
                </h2>
            </div>
        </div>
    )
} 

export default Header