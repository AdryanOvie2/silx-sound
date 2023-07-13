import '../styles/hero.css'
import Music from '../assets/spotify.jpg'

export default function Hero(){
    return(
        <div className='silx-hero'>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <img className='silx-hero-cover' src={Music} alt="music cover" />
            <div className="silx-hero-content">
                <h2 className='silx-hero-title'>Name Song</h2>
                <h3 className='silx-hero-artist'>Artist</h3>
                <img className='silx-hero-img-artist' src="" alt="image artist" />
                <div className="silx-buttons">
                    <a href="#">Listen Now</a>
                    <a href="#">Share</a>
                </div>
            </div>
        </div>
    )
}