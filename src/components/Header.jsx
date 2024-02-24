/* eslint-disable react/prop-types */
import accessibilityLogo from '../assets/images/icon-accessibility.svg'
import htmlLogo from '../assets/images/icon-html.svg'
import cssLogo from '../assets/images/icon-css.svg'
import jsLogo from '../assets/images/icon-js.svg'
import lightModeLogoLight from '../assets/images/icon-sun-light.svg'
import lightModeLogoDark from '../assets/images/icon-sun-dark.svg'
import darkModeLogoLight from '../assets/images/icon-moon-light.svg'
import darkModeLogoDark from '../assets/images/icon-moon-dark.svg'


// eslint-disable-next-line react/prop-types
const Header = ({
    colorMode,
    handleColorModeChange,
    currentSection,
    quizSections }) => { 
    const darkModeStyle = {
        marginInlineStart: 'auto'
    }
    const sectionStyle = {
        visibility: currentSection >= 0 ? 'visible' : 'hidden'
    }

    let text = ''
    let logoToUse = ''
    let backgroundLogoColorClass = ''

    if (currentSection >= 0) {
        let currentQuiz = quizSections[currentSection]
        const { title } = currentQuiz
        text = title

        if (title === 'HTML') {
            logoToUse = htmlLogo
            backgroundLogoColorClass = 'html'
        } else if (title === 'CSS') {
            logoToUse = cssLogo
            backgroundLogoColorClass = 'css'
        } else if (title === 'JavaScript') {
            logoToUse = jsLogo
            backgroundLogoColorClass = 'javascript'
        } else {
            logoToUse = accessibilityLogo
            backgroundLogoColorClass = 'accessibility'
        }
    }

    return (
      <div className="header">
        <div className="header-tag" style={sectionStyle}>
                <div className={`header-tag__img ${backgroundLogoColorClass}`}>
            <img src={logoToUse} />
          </div>
          <p className="header-tag__text">{text}</p>
        </div>

        <div className="toggle-container">
          <div className="toggle-light">
            <img
              src={
                colorMode === "dark" ? lightModeLogoLight : lightModeLogoDark
              }
            />
          </div>

          <div className="toggle-btn" onClick={handleColorModeChange}>
            <div
              className="toggle-circle"
              style={colorMode ? darkModeStyle : null}
            ></div>
          </div>
          <div className="toggle-dark">
            <img
              src={colorMode === "dark" ? darkModeLogoLight : darkModeLogoDark}
            />
          </div>
        </div>
      </div>
    );
}

export default Header;