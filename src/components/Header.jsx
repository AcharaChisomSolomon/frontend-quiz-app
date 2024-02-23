import accessibilityLogo from '../assets/images/icon-accessibility.svg'
// import htmlLogo from '../assets/images/icon-html.svg'
// import cssLogo from '../assets/images/icon-css.svg'
// import jsLogo from '../assets/images/icon-js.svg'
import lightModeLogoLight from '../assets/images/icon-sun-light.svg'
import lightModeLogoDark from '../assets/images/icon-sun-dark.svg'
import darkModeLogoLight from '../assets/images/icon-moon-light.svg'
import darkModeLogoDark from '../assets/images/icon-moon-dark.svg'


// eslint-disable-next-line react/prop-types
const Header = ({ colorMode, handleColorModeChange }) => { 
    const darkModeStyle = {
        marginInlineStart: 'auto'
    }

    return (
        <div className="header">
            
            <div className="header-tag">
                <div className='header-tag__img'>
                    <img src={`${accessibilityLogo}`} />
                </div>
                <p className='header-tag__text'>Accessibility</p>
            </div>
            
            <div className="toggle-container">
                
            <div className='toggle-light'>
                    <img src={
                        colorMode === 'dark'
                            ? lightModeLogoLight
                            : lightModeLogoDark} />        
            </div>
                
            <div className='toggle-btn' onClick={handleColorModeChange}>
                <div
                    className='toggle-circle'
                    style={colorMode ? darkModeStyle : null}></div>    
                </div>
                <div className='toggle-dark'>
                    <img src={colorMode === 'dark' ? darkModeLogoLight : darkModeLogoDark} />    
                </div>
            </div>
            
      </div>
    );
}

export default Header;