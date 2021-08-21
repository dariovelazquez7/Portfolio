import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./test.css"
import About from "../About/About"
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Home from "../Home/Home"

export default function Slide (props) {
  const [sliderRef] = useKeenSlider({
    spacing: 10,
    slidesPerView: 1,
    centered: true,
    vertical: true,
    loop: true,
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1"><Home/></div>
      <div className="keen-slider__slide number-slide2"> <About/></div>
      <div className="keen-slider__slide number-slide3"><Contact/></div>
      <div className="keen-slider__slide number-slide4"><Projects/></div> 
    </div>
  )
}
