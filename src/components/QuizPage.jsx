// import correctLogo from '../assets/images/icon-correct.svg';
// import wrongLogo from '../assets/images/icon-error.svg';

const QuizPage = () => {
    return (
      <div className="quizpage">
        <div className="flex-body">
          <p className="quiz-text">Question 6 of 10</p>

          <h3 className="quiz-question">
            Which of these color contrast ratios defines the minimum WCAG 2.1 AA
            requirement for normal text?
          </h3>

          <div className="quiz-visualNum__container">
            <div className="quiz-visualNum"></div>
          </div>
        </div>

        <div className="flex-body">
          <div className="quiz-options">
            <button className="quiz-option">
              <div className="quiz-option__tag">A</div>
              <div className="quiz-option__text">4.5:1</div>
            </button>
            <button className="quiz-option">
              <div className="quiz-option__tag">B</div>
              <div className="quiz-option__text">3:1</div>
              {/* <div className="quiz-option__logo">
              <img src={correctLogo} alt="Correct answer" />
            </div> */}
            </button>
            <button className="quiz-option">
              <div className="quiz-option__tag">C</div>
              <div className="quiz-option__text">2.5:1</div>
              {/* <div className="quiz-option__logo">
              <img src={wrongLogo} alt="Wrong answer" />
            </div> */}
            </button>
            <button className="quiz-option">
              <div className="quiz-option__tag">D</div>
              <div className="quiz-option__text">5:1</div>
              {/* <div className="quiz-option__logo">
              <img src={correctLogo} alt="Correct answer" />
            </div> */}
            </button>
          </div>

          <button className="quiz-submit">Submit Answer</button>
          {/* <div className='error'>
            <div className='error-logo'>
                <img src={wrongLogo} alt="An error messsage" />
            </div>
            <div className='error-text'>
                <p>Please select an answer</p>
            </div>
        </div> */}
        </div>
      </div>
    );
 }

export default QuizPage;