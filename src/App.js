import { Box } from "@chakra-ui/react";
import Carousel from "./components/Carousel/Carousel";
import img1 from "./assets/img/img1.jpg";
import img2 from "./assets/img/img2.jpg";
import img3 from "./assets/img/img3.jpg";

const slides = [
  { 
    title: 'Slide 1',
    description: 'Lorem ipsum dolorum',
    image: img1,
    id: 0
  },
  { 
    title: 'Slide 2',
    description: 'Lorem ipsum dolorum',
    image: img2,
    id: 1
  },
  { 
    title: 'Slide 3',
    description: 'Lorem ipsum dolorum',
    image: img3,
    id: 2
  }
]
export default function App() {
  return (
    <Box w="100%" h="100vh" pos="relative" left="0" top="0">
      <Carousel title="Chakra Carousel" slides={slides} />
    </Box>
  );
}
