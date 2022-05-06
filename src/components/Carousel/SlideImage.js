import { Box, Image } from "@chakra-ui/react";

const SlideImage = ({ slide }) => {
  return (
    <Box h="100%">
      <Image boxSize="100%" objectFit="cover" src={slide.image} alt={slide.title} />
    </Box>
  )
}

export default SlideImage;