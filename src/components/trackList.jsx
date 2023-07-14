import '../styles/tracklist.css'
import 'boxicons'

const songs = [
    { id:1, iconPlay: <box-icon size='lg' name='play' flip='vertical' color='#ffffff' />, nameSong: 'Name Song', artist: 'Artist', duration: '3:04', iconShare: <box-icon size='md' name='share-alt' type='solid' flip='vertical' color='#ffffff' /> },
    { id:2, iconPlay: <box-icon size='lg' name='play' flip='vertical' color='#ffffff' />, nameSong: 'Name Song', artist: 'Artist', duration: '3:04', iconShare: <box-icon size='md' name='share-alt' type='solid' flip='vertical' color='#ffffff' /> },
    { id:3, iconPlay: <box-icon size='lg' name='play' flip='vertical' color='#ffffff' />, nameSong: 'Name Song', artist: 'Artist', duration: '3:04', iconShare: <box-icon size='md' name='share-alt' type='solid' flip='vertical' color='#ffffff' /> },
    { id:4, iconPlay: <box-icon size='lg' name='play' flip='vertical' color='#ffffff' />, nameSong: 'Name Song', artist: 'Artist', duration: '3:04', iconShare: <box-icon size='md' name='share-alt' type='solid' flip='vertical' color='#ffffff' /> },
    { id:5, iconPlay: <box-icon size='lg' name='play' flip='vertical' color='#ffffff' />, nameSong: 'Name Song', artist: 'Artist', duration: '3:04', iconShare: <box-icon size='md' name='share-alt' type='solid' flip='vertical' color='#ffffff' /> },
    { id:6, iconPlay: <box-icon size='lg' name='play' flip='vertical' color='#ffffff' />, nameSong: 'Name Song', artist: 'Artist', duration: '3:04', iconShare: <box-icon size='md' name='share-alt' type='solid' flip='vertical' color='#ffffff' /> },
    { id:7, iconPlay: <box-icon size='lg' name='play' flip='vertical' color='#ffffff' />, nameSong: 'Name Song', artist: 'Artist', duration: '3:04', iconShare: <box-icon size='md' name='share-alt' type='solid' flip='vertical' color='#ffffff' /> },
    { id:8, iconPlay: <box-icon size='lg' name='play' flip='vertical' color='#ffffff' />, nameSong: 'Name Song', artist: 'Artist', duration: '3:04', iconShare: <box-icon size='md' name='share-alt' type='solid' flip='vertical' color='#ffffff' /> },
    { id:9, iconPlay: <box-icon size='lg' name='play' flip='vertical' color='#ffffff' />, nameSong: 'Name Song', artist: 'Artist', duration: '3:04', iconShare: <box-icon size='md' name='share-alt' type='solid' flip='vertical' color='#ffffff' /> },
    { id:10, iconPlay: <box-icon size='lg' name='play' flip='vertical' color='#ffffff' />, nameSong: 'Name Song', artist: 'Artist', duration: '3:04', iconShare: <box-icon size='md' name='share-alt' type='solid' flip='vertical' color='#ffffff' /> },
    { id:11, iconPlay: <box-icon size='lg' name='play' flip='vertical' color='#ffffff' />, nameSong: 'Name Song', artist: 'Artist', duration: '3:04', iconShare: <box-icon size='md' name='share-alt' type='solid' flip='vertical' color='#ffffff' /> },
    { id:12, iconPlay: <box-icon size='lg' name='play' flip='vertical' color='#ffffff' />, nameSong: 'Name Song', artist: 'Artist', duration: '3:04', iconShare: <box-icon size='md' name='share-alt' type='solid' flip='vertical' color='#ffffff' /> },
];

export default function TrackList(){
    const itemSong = songs.map(song =>
        <li key={song.id} className='trackList-itemSong'>
            <p className="tranList-song-number">{song.id}</p>
            {song.iconPlay}
            <div className="tranList-song-content">
                <h3 className="tranList-song">{song.nameSong}</h3>
                <h4 className="tranList-song-artist">{song.artist}</h4>
            </div>
            <p className="tranList-song-duration">{song.duration}</p>
            {song.iconShare}
        </li>
        );
    
    return(
        <div className='trackList'>
            <h2 className="trackList-title">Track List</h2>
            <ul className="trackList-songs">
                {itemSong}
            </ul>
        </div>
    )
}