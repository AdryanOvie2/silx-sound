import '../styles/streamChannel.css'
import 'boxicons'

const enlaces = [
    { id: 1, href: '#', boxIcon: <box-icon size='sm' name='instagram' type='logo' color='#ffffff'/>},
    { id: 2, href: '#', boxIcon: <box-icon size='sm' name='tiktok' type='logo' color='#ffffff' />},
    { id: 3, href: '#', boxIcon: <box-icon size='sm' name='twitter' type='logo' color='#ffffff' />},
    { id: 4, href: '#', boxIcon: <box-icon size='sm' name='twitch' type='logo' color='#ffffff' />},
    { id: 5, href: '#', boxIcon: <box-icon size='sm' name='facebook-circle' type='logo' color='#ffffff' />},
    { id: 6, href: '#', boxIcon: <box-icon size='sm' name='discord' type='logo' color='#ffffff' />},
    { id: 7, href: '#', boxIcon: <box-icon size='sm' name='spotify' type='logo' color='#ffffff'/>}
];

export default function Stream(){
    const stream = enlaces.map(enlace => 
            <li key={enlace.id}>
                <a href={enlace.href}>
                    {enlace.boxIcon}
                </a>
            </li>
        );
    return(
        <div className="stream">
            <h2 className='stream-title'>Stream it your way</h2>
            <ul className="stream-table">
                {stream}
            </ul>
        </div>
    )
}