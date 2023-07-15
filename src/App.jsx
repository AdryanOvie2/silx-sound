import './App.css'
import './styles/socialMedia.css'
import BackgroundPage from './components/backgroundPage'
import Sidebar from './components/sidebar'
import Hero from './components/hero'
import Header from './components/header'
import SocialMedia from './components/socialMedia'
import StreamChannel from './components/streamChannel'
import TrackList from './components/trackList'
import Info from './components/info'
import Footer from './components/footer'

function App() {

  return (
    <>
      <BackgroundPage/>
      <ul className="socialMedia">
        <SocialMedia/>    
      </ul>
      <Sidebar/>
      <Header/>
      <section className="main">
        <Hero/>
        <StreamChannel/>
        <TrackList/>
        <Info/>
        <Footer/>
      </section>
    </>
  )
}

export default App
