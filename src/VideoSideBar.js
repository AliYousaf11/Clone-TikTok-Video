import React from 'react'
import './VideoSideBar.css'

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import { useState } from 'react';

function VideoSideBar({likes,shares,messages}) {
    const [liked,setLiked] = useState(false);


    return (
        <div className='video_sidebar'>
            <div className="videoSidebar_button">
                {
                    liked ? 
                    <FavoriteIcon fontSize ="large" onClike = { e => setLiked(false)}/> : 
                    <FavoriteBorderIcon onClike = { e => setLiked(true)}/> 
                }
                <p>{likes ? likes + 1: likes}K</p>
            </div>

            <div className="videoSidebar_button">
                <MessageIcon />
                <p>{messages}</p>
            </div>
            
            <div className="videoSidebar_button">
                <ShareIcon />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSideBar