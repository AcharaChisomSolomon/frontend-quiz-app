import htmlLogo from '../assets/images/icon-html.svg';
import cssLogo from '../assets/images/icon-css.svg';
import jsLogo from '../assets/images/icon-js.svg';
import a11yLogo from '../assets/images/icon-accessibility.svg';

const StartPage = () => { 
    return (
        <div className="startpage">

            <h1 className="startpage-intro">
                Welcome to the 
                <span className="intro-highlight">Frontend Quiz!</span>
            </h1>

            <p className="startpage-text">Pick a subject to get started.</p>

            <div className="startpage-options">
                <button>
                    <div>
                        <img src={htmlLogo} alt="HTML logo" />
                    </div>
                    <span>HTML</span>
                </button>
                <button>
                    <div>
                        <img src={cssLogo} alt="CSS logo" />
                    </div>
                    <span>CSS</span>
                </button>
                <button>
                    <div>
                        <img src={jsLogo} alt="JavaScript logo" />
                    </div>
                    <span>JavaScript</span>
                </button>
                <button>
                    <div>
                        <img src={a11yLogo} alt="Accessibility logo" />
                    </div>
                    <span>Accessibility</span>
                </button>
            </div>
            
        </div>
    )
}

export default StartPage;