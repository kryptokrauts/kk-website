import React, { useEffect, useState } from "react";
import AlphabethSliderStyle from "./alphabetSlider.module.css";

const chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


export default (props) => {

  const [scrolled, setScrolled] = useState(false);
  console.log(scrolled);
  const scrollHandler = evt => {
    if (evt.currentTarget.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  })

  let style = AlphabethSliderStyle.container;
  style += (scrolled ? ' ' + AlphabethSliderStyle.scrolled : '');
  return (
    <div className={style}>
      {chars.map(char => (
        <a className={AlphabethSliderStyle.char} key={char} href={'#' + char.toLowerCase()} >{char}</a>
      ))}
    </div>
  )
}