import { Box, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Indicator = ({ slides, currentSlide }) => {

  const Circle = styled.div`
  height: 10px;
  width: 10px;

  background-color: ${ 
  props => props.index === currentSlide ? "#fff":"gray"
  };
  border-radius: 50%;
  margin-right: 8px;
  cursor: pointer;
`;

  return (
    <Flex
    pos="absolute" 
    left="50%"
    bottom="40px"
    sx={{
      transform: "translateX(-50%)"
    }}
    >
    { 
      slides.map((slide, index) => <Circle index={index} onClick={() => console.log("Clicked!")}></Circle> ) 
    }
    </Flex>
  )
}

export default Indicator;