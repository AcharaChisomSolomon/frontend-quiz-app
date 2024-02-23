import tagLogo from '../assets/images/icon-accessibility.svg'

const QuizCompletion = () => { 
    return (
      <div className="result">
        <div className="flex-body">
          <h1>Quiz Completed</h1>
          <h2>You Scored. . .</h2>
        </div>

        <div className='flex-body'>
          <div className="result-container">
            <div className="header-tag">
              <div className="header-tag__img">
                <img src={tagLogo} />
              </div>
              <p className="header-tag__text">Accessibility</p>
            </div>

            <div className="result-score">8</div>

            <div className="result-total">out of 10</div>
          </div>

          <button className="quiz-complete__btn">Play Again</button>
        </div>
      </div>
    );
}

export default QuizCompletion;