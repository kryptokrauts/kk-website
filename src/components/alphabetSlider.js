import React from "react";
import AlphabethSliderStyle from "./alphabetSlider.module.css";

const chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const navigateTo = (char) => (event) => {
  const element = event.target;
  // get surrounding element
  const referenceElement = element.parentElement.parentElement;
  const target = Array.from(referenceElement.querySelectorAll('h1'))
    .find(item => item.innerText.trim() === char);
  const targetTop = target.offsetTop;
  window.scrollTo({
    top: targetTop - 70,
    left: 0,
    behavior: 'auto'
  });
};

export default (props) => {
  return (
    <div className={AlphabethSliderStyle.container}>
      {chars.map(char => (
        <div className={AlphabethSliderStyle.char} key={char} onClick={navigateTo(char)}>{char}</div>
      ))}
    </div>
  )
}