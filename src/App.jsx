import questions from './data.json'
import Header from './components/Header'
import StartPage from './components/StartPage'

function App() {
  console.log(questions)
  
  return (
    <div className='body'>
      <Header />
      <StartPage />
    </div>
  )
}

export default App
