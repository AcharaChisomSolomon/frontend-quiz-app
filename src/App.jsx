import questions from './data.json'
import Header from './components/Header'
import StartPage from './components/StartPage'
// import QuizPage from './components/QuizPage'
// import QuizCompletion from './components/QuizCompletion'
import { useState } from 'react'

function App() {
  console.log(questions)
  const [colorMode, setColorMode] = useState('')

  const handleColorModeChange = () => {
    setColorMode(colorMode === 'dark' ? '' : 'dark')
  }
  
  return (
    <div className={`container ${colorMode === 'dark' ? 'dark' : ''}`}>
      <div className="body">
        <Header
          colorMode={colorMode}
          handleColorModeChange={handleColorModeChange} />
        <StartPage />
        {/* <QuizPage /> */}
        {/* <QuizCompletion /> */}
      </div>
    </div>
  );
}

export default App
