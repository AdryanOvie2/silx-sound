import '../styles/header.css'
import '../styles/sidebar.css'
import Logo from './logo'
import SocialMedia from './socialMedia'

export default function Header(){
    function handleClick() {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle('open');
      }
    return(
        <header>
            <Logo/>
            <ul className='header-menu'>
                <SocialMedia/>
            </ul>
            <svg onClick={handleClick} id='sidebarOpen' width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                <path d="M4 18L20 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4 12L20 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4 6L20 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </header>
    )
}