import { useState } from "react";

import Controls from "./Controls";
import Content from "./Content";
import SlideImage from "./SlideImage";
import Indicator from "./Indicator"

import styled from "@emotion/styled";

const Container = styled.div`
  overflow: hidden;
  height: 100%;
`;

const Carousel = ({ title, slides }) => {
  const [ currentSlide, setCurrentSlide ] = useState(0);
  const [ slideAnimation, setSlideAnimation ] = useState("slideIn");
  
  return (
      <Container>

       { slides.map( (slide, index) => {
         if(index === currentSlide) return (
          <SlideImage slide={slide} animation={slideAnimation} setSlideAnimation={setSlideAnimation} />
         );
         return null;
       })}

       <Controls
       setSlide={setCurrentSlide} 
       currentSlide={currentSlide} 
       slideCount={slides.length} 
       setSlideAnimation={setSlideAnimation} 
       />

       <Indicator
       slides={slides} 
       currentSlide={currentSlide} 
       />
       
       <Content slide={slides[currentSlide]} />
      </Container>
  )
}

export default Carousel;