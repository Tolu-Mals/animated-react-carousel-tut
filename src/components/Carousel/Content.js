import { Box, Text, Heading } from "@chakra-ui/react";

const Content = ({ slide }) => {
  return (
    <Box
      pos="absolute"
      left="50%"
      top="80%"
      textAlign="center"
      color="white"
      width="60%"
      sx={{
        transform: "translate(-50%, -80%)"
      }}
    >
      <Heading as="h2" size="2xl" mb={4} fontWeight="300">
        {slide.title}
      </Heading>
      <Text fontWeight="300" fontSize="xl">{slide.description}</Text>
    </Box>
  );
};

export default Content;
