import tagLogo from '../assets/images/icon-accessibility.svg'
import lightModeLogoLight from '../assets/images/icon-sun-light.svg'
// import lightModeLogoDark from '../assets/images/icon-sun-dark.svg'
import darkModeLogoLight from '../assets/images/icon-moon-light.svg'
// import darkModeLogoDark from '../assets/images/icon-moon-dark.svg'


const Header = () => { 
    return (
        <div className="header">
            
        <div className="header-tag">
            <div className='header-tag__img'>
                <img src={tagLogo} />
            </div>
            <p className='header-tag__text'>Accessibility</p>
        </div>
            
        <div className="toggle-container">
            <div className='toggle-light'>
                <img src={lightModeLogoLight} />        
            </div>
            <div className='toggle-btn'>
                <div className='toggle-circle'></div>    
            </div>
            <div className='toggle-dark'>
                <img src={darkModeLogoLight} />    
            </div>
            </div>
            
      </div>
    );
}

export default Header;