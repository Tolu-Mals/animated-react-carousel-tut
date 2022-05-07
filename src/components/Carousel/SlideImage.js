import { Image, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useEffect } from "react";


const Container = styled(motion.div)`
  height: 100%;
  overflow: hidden;
`;

const SlideImage = ({ slide, animation, setSlideAnimation }) => {

  useEffect(() => {
    setSlideAnimation("slideIn");
  }, []);
  
  const variants = {
    fadeInitial: { opacity: 0 },
    fade: { opacity: 1, transition: { duration: 0.7 } },
    slideInitial: { x: "-100%"},
    slideIn: { x: 0 },
    slideOut: { x: "100%", transition: { duration: 0.2 } },
    slideIn2: { y: "-100%"},
    slideOut2: { y: "100%"}
  }

  return (
    <Container
    initial="slideInitial"
    animate={animation}
    variants={variants}
    >
      <Box pos="absolute" left="0" top="0" bg="rgba(0,0,0,0.7)" w="100%" h="100%"></Box>
      <Image boxSize="100%" objectFit="cover" src={slide.image} alt={slide.title} />
    </Container>
  )
}

export default SlideImage;