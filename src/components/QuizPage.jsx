/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import QuizButton from './QuizButton';
import correctLogo from '../assets/images/icon-correct.svg';
import wrongLogo from '../assets/images/icon-error.svg';

const QuizPage = ({ currentQuestion, currentQuestionIndex }) => {
  // eslint-disable-next-line no-undef
  const [options, setOptions] = useState(currentQuestion.options.map((option, i) => ({ index: i, option, selected: false })))

  const visualStyle = {
    width: `${(currentQuestionIndex + 1) * 10}%`
  }
  console.log(options)

  const handleOptionClick = (index) => { 
    const newOptions = options.map((option, i) => {
      if (i === index) {
        return { ...option, selected: true }
      }
      return { ...option, selected: false }
    })
    setOptions(newOptions)
  }

    return (
      <div className="quizpage">
        <div className="flex-body">
          <p className="quiz-text">Question {currentQuestionIndex + 1} of 10</p>

          <h3 className="quiz-question">
            {currentQuestion.question}
          </h3>

          <div className="quiz-visualNum__container">
            <div className="quiz-visualNum" style={visualStyle}></div>
          </div>
        </div>

        <div className="flex-body">
          <div className="quiz-options">
            {
              options.map((option, i) => (
                <QuizButton
                  key={option.index}
                  onClick={() => handleOptionClick(option.index)}
                  option={option}
                />
              ))
            }
          </div>

          <button className="quiz-submit">Submit Answer</button>
          <div className='error'>
            <div className='error-logo'>
                <img src={wrongLogo} alt="An error messsage" />
            </div>
            <div className='error-text'>
                <p>Please select an answer</p>
            </div>
          </div>  
        </div>
      </div>
    );
 }

export default QuizPage;