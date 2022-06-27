import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';

function VideoFooter({ channel, description, song }) {
    return (
        <div className='videoFooter'>
            <div className='videoFooter_text'>
                <h3 className='one'>@{channel}</h3>
                <p className='second'>{description}</p>
                <div className="videoFooter_message">
                    <MusicNoteIcon className='videoFooter_songlogo' />
                    <section className='news-message'>
                        <p>{song}</p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default VideoFooter