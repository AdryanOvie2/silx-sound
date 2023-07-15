import '../styles/socialMedia.css'
import 'boxicons'

const links = [
    { id: 1, href: '#', boxIcon: <box-icon size='sm' name='instagram' type='logo' color='#ffffff' animation='tada-hover'/>},
    { id: 2, href: '#', boxIcon: <box-icon size='sm' name='tiktok' type='logo' color='#ffffff' animation='tada-hover' />},
    { id: 3, href: '#', boxIcon: <box-icon size='sm' name='twitter' type='logo' color='#ffffff' animation='tada-hover' />},
    { id: 4, href: '#', boxIcon: <box-icon size='sm' name='twitch' type='logo' color='#ffffff' animation='tada-hover' />},
    { id: 5, href: '#', boxIcon: <box-icon size='sm' name='facebook-circle' type='logo' color='#ffffff' animation='tada-hover' />},
    { id: 6, href: '#', boxIcon: <box-icon size='sm' name='discord' type='logo' color='#ffffff' animation='tada-hover' />},
    { id: 7, href: '#', boxIcon: <box-icon size='sm' name='spotify' type='logo' color='#ffffff' animation='tada-hover'/>}
];

export default function SocialMedia(){
    const linkMenu = links.map(link =>
            <li key={link.id}>
                <a href={link.href}>
                    {link.boxIcon}
                </a>
            </li>
        );
    return(
        <ul className="socialMedia">
            {linkMenu}
        </ul>
    )
}