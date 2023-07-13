import '../styles/header.css'
import Logo from '../assets/music.svg'


export default function Header(){
    return(
        <header>
            <img src={Logo} alt="Logo" />
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                <path d="M4 18L20 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4 12L20 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4 6L20 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </header>
    )
}