import { Box } from "@chakra-ui/react";
import Carousel from "./components/Carousel/Carousel";

import img1 from "./assets/img/img1.webp";
import img2 from "./assets/img/img2.webp";
import img3 from "./assets/img/img3.webp";
import img4 from "./assets/img/img4.webp";

const slides = [
  {
    title: "Stephen Universe",
    description: "Stevonnie, Rosie's Sword and Lion",
    image: img1,
    id: 0
  },
  {
    title: "Doctor Strange",
    description: "Doctor Strange & Wanda",
    image: img2,
    id: 1
  },
  {
    title: "Spider Man",
    description: "Into The Spider Verse Spiderman Falling From High Buildings.",
    image: img3,
    id: 2
  },
  {
    title: "Avengers 4 End Game",
    description:
      "Avengers End Game With Superhero Characters On A Colorful Starry Background.",
    image: img4,
    id: 3
  }
];

export default function App() {
  return (
    <Box w="100%" h="100vh" pos="relative" left="0" top="0" bg="#333">
      <Carousel title="Chakra Carousel" slides={slides} />
    </Box>
  );
}
