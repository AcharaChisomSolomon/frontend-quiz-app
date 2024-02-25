/* eslint-disable no-unused-vars */
import questions from './data.json'
import Header from './components/Header'
import StartPage from './components/StartPage'
import QuizPage from './components/QuizPage'
import QuizCompletion from './components/QuizCompletion'
import { useState } from 'react'

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

function App() {
  const [quizSections, setQuizSections] = useState(() => questions.quizzes)
  const [currentSection, setCurrentSection] = useState(-1)
  const [currentQuizSection, setCurrentQuizSection] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [colorMode, setColorMode] = useState('')

  const gameInSession = currentSection !== -1 && currentQuestionIndex < 10

  const handleColorModeChange = () => {
    setColorMode(colorMode === 'dark' ? '' : 'dark')
  }

  const handleSectionChange = (sectionIndex) => {
    setCurrentSection(sectionIndex)
    
    const section = { ...quizSections[sectionIndex] }
    const questions = shuffleArray(section.questions)
    questions.forEach(question => {
      question.options = shuffleArray(question.options)
    })
    const quiz = { ...section, questions }
    setCurrentQuizSection(quiz)
  }

  const handleReset = () => { 
    setCurrentSection(-1)
    setCurrentQuizSection(null)
    setCurrentQuestionIndex(0)
    setCorrectAnswers(0)
  }
  
  return (
    <div className={`container ${colorMode === 'dark' ? 'dark' : ''}`}>
      <div className="body">
        <Header
          colorMode={colorMode}
          handleColorModeChange={handleColorModeChange}
          currentSection={currentSection}
          quizSections={quizSections}
        />
        {currentSection === -1 && <StartPage handleSectionChange={handleSectionChange} />}
        {currentSection !== -1 && gameInSession && <QuizPage
          currentQuestion={currentQuizSection.questions[currentQuestionIndex]}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          setCorrectAnswers={setCorrectAnswers}
        />}
        {currentSection !== -1 && !gameInSession && <QuizCompletion
          correctAnswers={correctAnswers}
          currentSection={currentSection}
          quizSections={quizSections}
          handleReset={handleReset}
        />}
      </div>
    </div>
  );
}

export default App
