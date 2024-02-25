/* eslint-disable react/prop-types */
import accessibilityLogo from "../assets/images/icon-accessibility.svg";
import htmlLogo from "../assets/images/icon-html.svg";
import cssLogo from "../assets/images/icon-css.svg";
import jsLogo from "../assets/images/icon-js.svg";

const QuizCompletion = ({
  correctAnswers,
  currentSection,
  quizSections,
  handleReset,
}) => {
  let text = "";
  let logoToUse = "";
  let backgroundLogoColorClass = "";

  if (currentSection >= 0) {
    let currentQuiz = quizSections[currentSection];
    const { title } = currentQuiz;
    text = title;

    if (title === "HTML") {
      logoToUse = htmlLogo;
      backgroundLogoColorClass = "html";
    } else if (title === "CSS") {
      logoToUse = cssLogo;
      backgroundLogoColorClass = "css";
    } else if (title === "JavaScript") {
      logoToUse = jsLogo;
      backgroundLogoColorClass = "javascript";
    } else {
      logoToUse = accessibilityLogo;
      backgroundLogoColorClass = "accessibility";
    }
  }

  return (
    <div className="result">
      <div className="flex-body">
        <h1>Quiz Completed</h1>
        <h2>You Scored. . .</h2>
      </div>

      <div className="flex-body">
        <div className="result-container">
          <div className="header-tag" style={{ visibility: 'visible' }}>
            <div className={`header-tag__img ${backgroundLogoColorClass}`}>
              <img src={logoToUse} />
            </div>
            <p className="header-tag__text">{text}</p>
          </div>

          <div className="result-score">{ correctAnswers }</div>

          <div className="result-total">out of 10</div>
        </div>

        <button className="quiz-complete__btn" onClick={handleReset}>Play Again</button>
      </div>
    </div>
  );
};

export default QuizCompletion;
