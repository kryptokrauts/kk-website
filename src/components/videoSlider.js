import React, { useState } from "react";
import VideoItem from "./videoItem";
import VideoSliderModule from "./videoSlider.module.css";

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

export default ({ videos }) => {
  const [videoIndex, updateVideoIndex] = useState(0);

  const sliderIndicator = videos
    .map((_, index) => index);

  return (
    <div className={VideoSliderModule.slider}>
      <SliderDisplay items={videos} active={videoIndex} />
      <SliderControl items={sliderIndicator} active={videoIndex} onChange={updateVideoIndex} />
    </div>
  )
}
