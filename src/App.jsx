import questions from './data.json'
import Header from './components/Header'
// import StartPage from './components/StartPage'
import QuizPage from './components/QuizPage'

function App() {
  console.log(questions)
  
  return (
    <div className='body'>
      <Header />
      {/* <StartPage /> */}
      <QuizPage />
    </div>
  )
}

export default App
