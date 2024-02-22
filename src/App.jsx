import questions from './data.json'
import Header from './components/Header'
// import StartPage from './components/StartPage'
// import QuizPage from './components/QuizPage'
import QuizCompletion from './components/QuizCompletion'

function App() {
  console.log(questions)
  
  return (
    <div className='body'>
      <Header />
      {/* <StartPage /> */}
      {/* <QuizPage /> */}
      <QuizCompletion />
    </div>
  )
}

export default App
