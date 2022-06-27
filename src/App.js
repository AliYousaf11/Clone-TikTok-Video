import React, { useState } from 'react';
import './App.css';
import Video from './Video';

function App() {
  const [videos, setVideos] = useState([])

  return (
    <div className="App">
      <h1><em>Tik Tok Clone style</em></h1>
      <center>
        <div className="app_videos">
          <Video
            url="https://v16-webapp.tiktok.com/5127163a788aeb6428835ba45f8709ff/62b8a4ed/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/28c6e708198e40caa497cb87fdaffd2f/?a=1988&amp;ch=0&amp;cr=0&amp;dr=0&amp;lr=tiktok_m&amp;cd=0%7C0%7C0%7C0&amp;br=2020&amp;bt=1010&amp;btag=80000&amp;cs=0&amp;ds=1&amp;ft=eXd.6HKVMyq8Z.rC8we2NiUQml7Gb&amp;mime_type=video_mp4&amp;qs=0&amp;rc=ZDhkOTs6NTo8PDY2M2RpN0BpM212dDQ6ZmU1ZDMzZjczM0BjMF4tNWEwNTMxL19gMmE0YSNkcWpncjRvNHBgLS1kMWNzcw%3D%3D&amp;l=2022062612263801024500411404120EA5"
            channel="aliyousaf"
            description="WOW this works....."
            song="Hip Hop Hip"
            likes={123}
            messages={400}
            shares={520}
          />
          
          <Video 
            url="https://v16-webapp.tiktok.com/5127163a788aeb6428835ba45f8709ff/62b8a4ed/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/28c6e708198e40caa497cb87fdaffd2f/?a=1988&amp;ch=0&amp;cr=0&amp;dr=0&amp;lr=tiktok_m&amp;cd=0%7C0%7C0%7C0&amp;br=2020&amp;bt=1010&amp;btag=80000&amp;cs=0&amp;ds=1&amp;ft=eXd.6HKVMyq8Z.rC8we2NiUQml7Gb&amp;mime_type=video_mp4&amp;qs=0&amp;rc=ZDhkOTs6NTo8PDY2M2RpN0BpM212dDQ6ZmU1ZDMzZjczM0BjMF4tNWEwNTMxL19gMmE0YSNkcWpncjRvNHBgLS1kMWNzcw%3D%3D&amp;l=2022062612263801024500411404120EA5"
            channel="aliyousaf"
            description="WOW this works....."
            song="Hip Hop Hip"
            likes={123}
            messages={400}
            shares={520}      
          />

        </div>
      </center>
    </div>
  );
}

export default App;
