import '../styles/info.css'
import 'boxicons'

export default function Info(){
    return(
        <section className='info'>
            <hr className="info-divider" />
            <div className="info-content">
                <ul className='info-site'>
                    <li>About Silx Sound</li>
                    <li>Contact us</li>
                    <li>Career</li>
                    <li>News</li>
                    <li>Press</li>
                </ul>
                <ul className='info-legal'>
                    <li>Terms of Services</li>
                    <li>Privacy policy</li>
                </ul>
                <div className='info-newsletter'>
                    <h3>Silx Sound</h3>
                    <p>Don`t miss a thing, stay up to date with the latest news from us.</p>
                    <form className='info-newsletter-form'>
                        <input type="email" placeholder='Enter email'/>
                        <button type="submit">
                            <box-icon animation='tada-hover' name='right-arrow-alt' flip='vertical' color='#ffffff' ></box-icon>
                        </button>
                    </form>
                </div>
            </div>
            <hr className="info-divider" />
        </section>
    )
}