/* eslint-disable react/prop-types */
const QuizButton = ({ onClick, option }) => { 
    const letter = ['A', 'B', 'C', 'D']

    return (
        <button
            className={`quiz-option ${option.selected ? 'selected' : ''}`}
            onClick={onClick}>
            <div className="quiz-option__tag">{ letter[option.index] }</div>
            <div className="quiz-option__text">{ option.option }</div>

        {/* <div className="quiz-option__logo">
              <img src={correctLogo} alt="Correct answer" />
            </div> */}
        {/* <div className="quiz-option__logo">
              <img src={wrongLogo} alt="Wrong answer" />
            </div> */}
        
      </button>
    );
}

export default QuizButton