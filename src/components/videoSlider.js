import React, { useState } from "react";
import VideoItem from "./videoItem";
import VideoSliderModule from "./videoSlider.module.css";

const fetchVideos = () => fetch('https://api.kryptokrauts.com/pepo/v1/videos?limit=5')
  .then(response => response.json());

const SliderButton = ({ onClick, selected }) => (
  <div onClick={onClick} className={
    selected ?
      VideoSliderModule.sliderIndicator + ' ' + VideoSliderModule.sliderIndicatorActive :
      VideoSliderModule.sliderIndicator
  }></div>
)

const SliderControl = ({ items, active, onChange }) => (
  <div className={VideoSliderModule.sliderControl}>
    {items.map(i => (<SliderButton key={i} selected={i === active} onClick={() => onChange(i)} />))}
  </div>
)

const SliderDisplay = ({ items, active }) => {
  const inactiveRight = VideoSliderModule.sliderItem + ' ' + VideoSliderModule.sliderItemRight;
  const inactiveLeft = VideoSliderModule.sliderItem + ' ' + VideoSliderModule.sliderItemLeft;

  const getSliderItemClass = (index) => {
    if (index < active) {
      return inactiveLeft;
    } if (index > active) {
      return inactiveRight;
    }
    return VideoSliderModule.sliderItem;
  };

  return (
    <div className={VideoSliderModule.sliderContent}>
      {
        items.map((video, index) => (
          <div key={video.id + '-' + index} className={getSliderItemClass(index)}>
            <VideoItem data={video} />
          </div>
        ))
      }
    </div>
  )
}

export default () => {
  const [videoList, updateVideoList] = useState([]);
  const [videoIndex, updateVideoIndex] = useState(0);

  const sliderIndicator = videoList
    .map((_, index) => index);

  fetchVideos()
    .then(videos => updateVideoList(videos));

  return (
    <div className={VideoSliderModule.slider}>
      <SliderDisplay items={videoList} active={videoIndex} />
      <SliderControl items={sliderIndicator} active={videoIndex} onChange={updateVideoIndex} />
    </div>
  )
}
