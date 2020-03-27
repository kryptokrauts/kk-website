import React, { useState } from "react";
import VideoItemModule from "./videoItem.module.css";

export default ({ data }) => {
  const [isPlaying, updatePlaying] = useState(false);
  const videoRef = React.createRef();
  const play = () => {
    videoRef.current.play();
    updatePlaying(true);
  };
  const pause = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    updatePlaying(false);
  }
  return (
    <div class={VideoItemModule.container}>
      <div class={VideoItemModule.likes} title="Likes">
        <div class={VideoItemModule.likesCounter}>{data.total_contributors}</div>
        <div class={VideoItemModule.likesImage}></div>
      </div>
      <video ref={videoRef} class={VideoItemModule.video}>
        <source src={data.video_url} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
      {
        isPlaying ? (
          <div class={VideoItemModule.control} onClick={pause}>
            <i class="far fa-pause-circle"></i>
          </div>
        ) : (
            <div class={VideoItemModule.control} onClick={play}>
              <i class="far fa-play-circle"></i>
            </div>
          )
      }


    </div>
  )
}
