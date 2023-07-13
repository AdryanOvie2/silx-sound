import '../styles/hero.css'
import Music from '../assets/spotify.jpg'

export default function Hero(){
    return(
        <div className='silx-hero'>
            <div className='silx-hero-header'>
                <div className='silx-hero-album'><span>Lorem</span> - ipsum dolor sit amet consectetur.</div>
                <img className='silx-hero-cover' src={Music} alt="music cover" />
            </div>
            <div className="silx-hero-content">
                <h2 className='silx-hero-title'>My Mind</h2>
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