import './App.css'
import BackgroundPage from './components/backgroundPage'
import Hero from './components/hero'
import Header from './components/header'
import SocialMedia from './components/socialMedia'
import StreamChannel from './components/streamChannel'

function App() {

  return (
    <>
      <BackgroundPage/>
      <SocialMedia/>
      <Header/>
      <section className="main">
        <Hero/>
        <StreamChannel/>
      </section>
    </>
  )
}

export default App
