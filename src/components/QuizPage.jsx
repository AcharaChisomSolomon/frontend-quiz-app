/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import QuizButton from './QuizButton';
import wrongLogo from '../assets/images/icon-error.svg';

const QuizPage = ({
  currentQuestion,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  setCorrectAnswers
}) => {
  // eslint-disable-next-line no-undef
  const [options, setOptions] = useState(currentQuestion.options.map((option, i) => ({
    index: i,
    option,
    selected: false
  })))

  useEffect(() => {
    setOptions(currentQuestion.options.map((option, i) => ({
      index: i,
      option,
      selected: false
    })))
   }, [currentQuestion])

  const [submissionStatus, setSubmissionStatus] = useState({
    isSubmitted: false,
    isVerified: false
  })
  const { isSubmitted, isVerified } = submissionStatus

  const visualStyle = {
    width: `${(currentQuestionIndex + 1) * 10}%`
  }

  const isAnyOptionSelected = options.some(option => option.selected)
  const checkIfCorrectOptionSelected = options.some(option => option.selected && option.option === currentQuestion.answer)

  const handleSubmit = () => { 
    if (isSubmitted && isVerified) {
      if (checkIfCorrectOptionSelected) { 
        setCorrectAnswers(prevAnswers => prevAnswers + 1)
      }
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSubmissionStatus({ isVerified: false, isSubmitted: false })
      const newOptions = options.map(option => ({ ...option, selected: false }))
      setOptions(newOptions)
    } else { 
      if (isAnyOptionSelected) {
        setSubmissionStatus({ isVerified: true, isSubmitted: true });
      } else {
        setSubmissionStatus({ isSubmitted: true, isVerified: false });
      }
    }
  }

  const handleOptionClick = (index) => { 
    if (!isVerified) {
      const newOptions = options.map((option, i) => {
        if (i === index) {
          return { ...option, selected: true };
        }
        return { ...option, selected: false };
      });
      setOptions(newOptions);
    }
  }

    return (
      <div className="quizpage">
        <div className="flex-body">
          <p className="quiz-text">Question {currentQuestionIndex + 1} of 10</p>

          <h3 className="quiz-question">{currentQuestion.question}</h3>

          <div className="quiz-visualNum__container">
            <div className="quiz-visualNum" style={visualStyle}></div>
          </div>
        </div>

        <div className="flex-body">
          <div className="quiz-options">
            {options.map((option, i) => (
              <QuizButton
                key={option.index}
                onClick={() => handleOptionClick(option.index)}
                option={option}
                isAnyOptionSelected={isAnyOptionSelected}
                isVerified={isVerified}
                answer={currentQuestion.answer}
              />
            ))}
          </div>

          <button className="quiz-submit" onClick={handleSubmit}>
            {isSubmitted && isAnyOptionSelected && isVerified
              ? "Next Question"
              : "Submit Answer"
            }
          </button>
          {isSubmitted && !isAnyOptionSelected && (
            <div className="error">
              <div className="error-logo">
                <img src={wrongLogo} alt="An error messsage" />
              </div>
              <div className="error-text">
                <p>Please select an answer</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
 }

export default QuizPage;