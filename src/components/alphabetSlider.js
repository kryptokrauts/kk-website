import React from "react";
import AlphabethSliderStyle from "./alphabetSlider.module.css";

const chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

export default (props) => {
  return (
    <div className={AlphabethSliderStyle.container}>
      {chars.map(char => (
        <a className={AlphabethSliderStyle.char} key={char} href={'#' + char.toLowerCase()} >{char}</a>
      ))}
    </div>
  )
}