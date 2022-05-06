import { Flex, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"

const Controls = ({ setSlide, currentSlide, slideCount }) => {
  const handleNext = () => {
    setSlide((currentSlide + 1) % slideCount);
  }

  const handlePrev = () => {
    setSlide((currentSlide - 1) % slideCount);
  }

  return (
    <Flex
    pos="absolute"
    left="0"
    top="50%"
    w="100%"
    justify="space-between"
    p={4}
    >
      <IconButton
      aria-label="Previous Slide"
      icon={<ChevronLeftIcon />}
      colorScheme="blue"
      size="lg"
      onClick={handlePrev}
      />

      <IconButton
      aria-label="Previous Slide"
      icon={<ChevronRightIcon />}
      colorScheme="blue"
      size="lg"
      onClick={handleNext}
      />

    </Flex>
  )
}

export default Controls;