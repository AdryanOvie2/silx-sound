import '../styles/footer.css'
import 'boxicons'

const footerMedia = [
    { id: 1, href: '#', boxIcon: <box-icon size='sm' animation='tada-hover' name='soundcloud' type='logo' color='#ffffff' />},
    { id: 2, href: '#', boxIcon: <box-icon size='sm' animation='tada-hover' name='deezer' type='logo' color='#ffffff' />},
    { id: 3, href: '#', boxIcon: <box-icon size='sm' animation='tada-hover' name='youtube' type='logo' color='#ffffff' />},
    { id: 4, href: '#', boxIcon: <box-icon size='sm' animation='tada-hover' name='spotify' type='logo' color='#ffffff'/>},
    { id: 5, href: '#', boxIcon: <box-icon size='sm' animation='tada-hover' name='apple' type='logo' color='#ffffff' />},
    { id: 6, href: '#', boxIcon: <box-icon size='sm' animation='tada-hover' name='tiktok' type='logo' color='#ffffff' />},
    { id: 7, href: '#', boxIcon: <box-icon size='sm' animation='tada-hover' name='twitter' type='logo' color='#ffffff' />},
    { id: 8, href: '#', boxIcon: <box-icon size='sm' animation='tada-hover' name='twitch' type='logo' color='#ffffff' />},
    { id: 9, href: '#', boxIcon: <box-icon size='sm' animation='tada-hover' name='facebook-circle' type='logo' color='#ffffff' />},
    { id: 10, href: '#', boxIcon: <box-icon size='sm' animation='tada-hover' name='discord' type='logo' color='#ffffff' />}
];

export default function Footer(){
    const footerItem = footerMedia.map(enlace => 
        <li key={enlace.id}>
            <a href={enlace.href}>
                {enlace.boxIcon}
                {enlace.name}
            </a>
        </li>
    );
    return(
        <footer>
            <div className="footer-header">
                <p className='footer-all-rights'>2011 - 2023 © Monstercat, All Rights Reserved</p>
                <ul className='footer-socialMedia'>
                    {footerItem}
                </ul>
            </div>
            <div className="footer-content">
                <p>
                We acknowledge with gratitude the traditional, ancestral and unceded land of the Coast Salish peoples, including the territories of the Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwəta /Selilwitulh (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which Monstercat`s Vancouver HQ stands.
                </p>
                <p>
                We acknowledge the unceded and ancestral territories of the Gabrielino/Tongva peoples on which our LA team live and work.
                </p>
            </div>
        </footer>
    )
}