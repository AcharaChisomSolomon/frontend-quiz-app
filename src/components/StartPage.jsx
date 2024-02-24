/* eslint-disable react/prop-types */
import htmlLogo from '../assets/images/icon-html.svg';
import cssLogo from '../assets/images/icon-css.svg';
import jsLogo from '../assets/images/icon-js.svg';
import a11yLogo from '../assets/images/icon-accessibility.svg';

const StartPage = ({ handleSectionChange }) => { 
    return (
      <div className="startpage">
        <div className='flex-body'>
          <h1 className="startpage-intro">
            Welcome to the
            <span className="intro-highlight">Frontend Quiz!</span>
          </h1>

          <p className="startpage-text">Pick a subject to get started.</p>
        </div>

        <div className="startpage-options flex-body">
          <button
            className="startpage-option"
            onClick={() => handleSectionChange(0)}
          >
            <div className="startpage-option__logo html">
              <img src={htmlLogo} alt="HTML logo" />
            </div>
            <span className="startpage-option__text">HTML</span>
          </button>

          <button
            className="startpage-option"
            onClick={() => handleSectionChange(1)}
          >
            <div className="startpage-option__logo css">
              <img src={cssLogo} alt="CSS logo" />
            </div>
            <span className="startpage-option__text">CSS</span>
          </button>

          <button
            className="startpage-option"
            onClick={() => handleSectionChange(2)}
          >
            <div className="startpage-option__logo javascript">
              <img src={jsLogo} alt="JavaScript logo" />
            </div>
            <span className="startpage-option__text">JavaScript</span>
          </button>

          <button
            className="startpage-option"
            onClick={() => handleSectionChange(3)}
          >
            <div className="startpage-option__logo accessibility">
              <img src={a11yLogo} alt="Accessibility logo" />
            </div>
            <span className="startpage-option__text">Accessibility</span>
          </button>
        </div>
      </div>
    );
}

export default StartPage;