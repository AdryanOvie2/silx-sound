import '../styles/streamChannel.css'
import 'boxicons'

const enlaces = [
    { id: 1, href: '#', boxIcon: <box-icon size='sm' name='soundcloud' type='logo' color='#ffffff' />, name: 'SOUNCLOUD'},
    { id: 2, href: '#', boxIcon: <box-icon size='sm' name='deezer' type='logo' color='#ffffff' />, name: 'DEEZER'},
    { id: 3, href: '#', boxIcon: <box-icon size='sm' name='youtube' type='logo' color='#ffffff' />, name: 'YOUTUBE'},
    { id: 7, href: '#', boxIcon: <box-icon size='sm' name='spotify' type='logo' color='#ffffff'/>, name: 'SPOTIFY'}
];

export default function Stream(){
    const stream = enlaces.map(enlace => 
            <li key={enlace.id}>
                <a href={enlace.href}>
                    {enlace.boxIcon}
                    {enlace.name}
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