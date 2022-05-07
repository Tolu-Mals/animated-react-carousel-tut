import { useEffect } from "react";
import { Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";


const Container = styled(motion.div)`
  height: 100%;
  opacity: 0;
`;

const SlideImage = ({ slide }) => {

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  }

  useEffect(() => {
    console.log("Mounting Slide Image");
    return () => console.log("Unmounting Slide Image");
  }, [])

  return (
    <Container
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <Image boxSize="100%" objectFit="cover" src={slide.image} alt={slide.title} />
    </Container>
  )
}

export default SlideImage;