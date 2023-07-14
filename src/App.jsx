import './App.css'
import BackgroundPage from './components/backgroundPage'
import Hero from './components/hero'
import Header from './components/header'
import SocialMedia from './components/socialMedia'

function App() {

  return (
    <>
      <BackgroundPage/>
      <SocialMedia/>
      <Header/>
      <section className="main">
        <Hero/>
      </section>
    </>
  )
}

export default App
