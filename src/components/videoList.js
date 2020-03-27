import React, { useState } from "react";
import VideoItem from "./videoItem";
import VideoListModule from "./videoList.module.css";

const renderVideoItem = video => (<VideoItem key={video.id} data={video} />);

const fetchVideos = () => fetch('https://api.kryptokrauts.com/pepo/v1/videos')
  .then(response => response.json());

export default () => {
  const [videoList, updateVideoList] = useState([]);

  fetchVideos()
    .then(videos => updateVideoList(videos));

  return (
    <div className={VideoListModule.container}>
      {videoList.map(renderVideoItem)}
    </div>
  )
}
