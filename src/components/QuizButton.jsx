/* eslint-disable react/prop-types */
import correctLogo from "../assets/images/icon-correct.svg";
import wrongLogo from "../assets/images/icon-error.svg";

const QuizButton = ({
    onClick,
    option,
    isAnyOptionSelected,
    isVerified,
    answer
}) => { 
    const letter = ['A', 'B', 'C', 'D']

    return (
      <button
        className={`
            quiz-option
            ${option.selected ? "selected" : ""}
            ${
              isVerified && answer === option.option && option.selected
                ? "correct"
                : ""
            }
            ${
              isVerified && answer !== option.option && option.selected
                ? "wrong"
                : ""
            }
            ${
              isVerified && answer === option.option && !option.selected
                ? "correct-not-selected"
                : ""
            }
            `}
        onClick={onClick}
      >
        <div className="quiz-option__tag">{letter[option.index]}</div>
        <div className="quiz-option__text">{option.option}</div>

        {isAnyOptionSelected &&
          isVerified &&
          answer === option.option &&
          option.selected && (
            <div className="quiz-option__logo">
              <img src={correctLogo} alt="Correct answer" />
            </div>
          )}

        {isAnyOptionSelected &&
          isVerified &&
          answer === option.option &&
          !option.selected && (
            <div className="quiz-option__logo">
              <img src={correctLogo} alt="Correct answer" />
            </div>
          )}

        {isAnyOptionSelected &&
          isVerified &&
          answer !== option.option &&
          option.selected && (
            <div className="quiz-option__logo">
              <img src={wrongLogo} alt="Wrong answer" />
            </div>
          )}
      </button>
    );
}

export default QuizButton