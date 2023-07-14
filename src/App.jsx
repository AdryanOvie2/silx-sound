import './App.css'
import BackgroundPage from './components/backgroundPage'
import Hero from './components/hero'
import Header from './components/header'
import SocialMedia from './components/socialMedia'
import StreamChannel from './components/streamChannel'
import TrackList from './components/trackList'

function App() {

  return (
    <>
      <BackgroundPage/>
      <SocialMedia/>
      <Header/>
      <section className="main">
        <Hero/>
        <StreamChannel/>
        <TrackList/>
      </section>
    </>
  )
}

export default App
