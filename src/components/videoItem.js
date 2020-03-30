import React, { useEffect, useState } from "react";
import VideoItemModule from "./videoItem.module.css";

export default ({ data }) => {
  if (!data) {
    return (<div></div>);
  }

  const [isPlaying, updatePlaying] = useState(false);
  const videoRef = React.createRef();
  const play = () => {
    videoRef.current.play();
    updatePlaying(true);
  };

  const resetVideo = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    updatePlaying(false);
  };

  useEffect(() => {
    const videoEl = videoRef.current;
    videoEl.setAttribute("playsinline", true);
    videoEl.addEventListener('ended', resetVideo);
    return () => videoEl.removeEventListener('ended', resetVideo);
  });

  return (
    <div className={VideoItemModule.container}>
      <div className={VideoItemModule.likes} title="Likes">
        <div className={VideoItemModule.likesCounter}>{data.total_contributors}</div>
        <div className={VideoItemModule.likesImage}></div>
      </div>
      <video ref={videoRef} className={VideoItemModule.video}
        poster={data.poster_image}>
        <source src={data.video_url} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
      {
        isPlaying ? (
          <div className={VideoItemModule.control} onClick={resetVideo}>
            <i className="far fa-pause-circle"></i>
          </div>
        ) : (
            <div className={VideoItemModule.control} onClick={play}>
              <i className="far fa-play-circle"></i>
            </div>
          )
      }
    </div>
  )
}
