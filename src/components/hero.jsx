import '../styles/hero.css'
import 'boxicons'
import Music from '../assets/spotify.jpg'

export default function Hero(){
    return(
        <div className='silx-hero'>
            <div className='silx-hero-header'>
                <div className='silx-hero-album'><span>Lorem</span> - ipsum dolor sit amet</div>
                <img className='silx-hero-cover' src={Music} alt="music cover" />
            </div>
            <div className="silx-hero-content">
                <h2 className='silx-hero-title'>My Mind</h2>
                <h3 className='silx-hero-artist'>Justin Kiddin</h3>

                <div className="silx-buttons">
                    <a href="#">
                        <box-icon size='md' color='white' name='play'></box-icon>
                        Listen Now
                    </a>
                    <a href="#">
                        <box-icon size='sm' name='share-alt' type='solid' color='#ffffff' ></box-icon>
                        Share
                    </a>
                </div>
            </div>
        </div>
    )
}