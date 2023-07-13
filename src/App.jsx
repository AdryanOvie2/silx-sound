import './App.css'
import BackgroundPage from './components/backgroundPage'
import Hero from './components/hero'
import Header from './components/header'

function App() {

  return (
    <>
      <BackgroundPage/>
      <Header/>
      <section className="main">
        <Hero/>
      </section>
    </>
  )
}

export default App
