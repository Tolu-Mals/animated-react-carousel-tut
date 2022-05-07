import { useState } from "react";

import Controls from "./Controls";
import Content from "./Content";
import SlideImage from "./SlideImage";
import Indicator from "./Indicator"


const Carousel = ({ title, slides }) => {
  const [ currentSlide, setCurrentSlide ] = useState(0);
  
  return (
      <>
       { slides.map( (slide, index) => {
         if(index === currentSlide) return <SlideImage slide={slide} />
         return null;
       })}
       <Controls  setSlide={setCurrentSlide} currentSlide={currentSlide} slideCount={slides.length} />
       <Indicator slides={slides} currentSlide={currentSlide} />
       <Content slide={slides[currentSlide]} />
      </>
  )
}

export default Carousel;