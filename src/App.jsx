import questions from './data.json'
import Header from './components/Header'
import StartPage from './components/StartPage'
// import QuizPage from './components/QuizPage'
// import QuizCompletion from './components/QuizCompletion'
import { useState } from 'react'

function App() {
  const [quizSections, setQuizSections] = useState(() => questions.quizzes)
  const [currentSection, setCurrentSection] = useState(-1)
  const [colorMode, setColorMode] = useState('')

  console.log(quizSections)

  const handleColorModeChange = () => {
    setColorMode(colorMode === 'dark' ? '' : 'dark')
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
        <StartPage />
        {/* <QuizPage /> */}
        {/* <QuizCompletion /> */}
      </div>
    </div>
  );
}

export default App
