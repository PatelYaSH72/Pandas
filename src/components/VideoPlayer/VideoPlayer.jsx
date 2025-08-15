import React from 'react'
import video from "../../assets/video.mp4"
import "./VideoPlayer.css"

const VideoPlayer = ({videoPlay,setVideoPlay}) => {
  return (
    <div className={`video  ${videoPlay?"hide":" "}`} onClick={setVideoPlay}>
       <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
