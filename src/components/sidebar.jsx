import '../styles/sidebar.css'
import Logo from './logo'
import SocialMedia from './socialMedia'

export default function Sidebar(){
    function handleClick(){
        const sidebar = document.getElementById("sidebar");
        // sidebar.style.width = "0";
        sidebar.classList.remove('open');
        console.log('quitar')
    }
    return(
        <div id="sidebar" className="sidebar">
            <div className="sidebar-header">
                <Logo />
                <button onClick={handleClick} id="sidebarClose" className="sidebarClose">X</button>
            </div>
            
            <ul className="sidebar-content">
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Client</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Programming</a></li>
                <li><a href="#">Gold</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">PLayer</a></li>
                <li><a href="#">Shop</a></li>
            </ul>
            <ul className='sidebar-media'>
                <SocialMedia/>
            </ul>
        </div>
    )
}