import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSideBar from './VideoSideBar';

function Video({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares
}) {

  const [playing, setPlay] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if(playing){
    videoRef.current.pause();
    setPlay(false);
    }
    else{
    videoRef.current.play();
    setPlay(true);
    }
  };

  return (

    <div class="video">

      <video 
      className='video_player' 
      onClick={onVideoPress}
      loop
      ref={videoRef}
      src={url}>
      </video>
      
      <VideoFooter 
      channel={channel}
      description={description}
      song={song}
      />  

      <VideoSideBar
      likes={likes}
      shares={shares}
      messages={messages}
      />  

    </div>
  )
}

export default Video