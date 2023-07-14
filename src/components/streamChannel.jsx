import '../styles/streamChannel.css'
import linkMenu from './socialMedia'

export default function Stream(){
    return(
        <div className="stream">
            <h2 className='stream-title'>Stream it your way</h2>
            <ul className="stream-table">
                {linkMenu}
            </ul>
        </div>
    )
}