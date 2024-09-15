import { Box, Text, Heading, Image, useBreakpointValue } from '@chakra-ui/react';
import './App.css';

function App() {
  // Define responsive width and height based on screen size
  const cardWidth = useBreakpointValue({ base: '90%', sm: '80%', md: '60%', lg: '70%' });
  const cardHeight = useBreakpointValue({ base: 'auto', sm: 'auto', md: '300px', lg: '350px' });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="gray.100"
      p={4}
    >
      <Box
        bg="white"
        color="gray.800"
        p={6}
        rounded="lg"
        shadow="md"
        w={cardWidth}
        h={cardHeight}
        textAlign="center"
      >
        <Heading as="h2" size="lg" mb={4}>
          My I-Card
        </Heading>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="https://media.licdn.com/dms/image/v2/D4D03AQHsm7eke2z3TA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722447234618?e=1732147200&v=beta&t=KzLyBT-JMR1MnmdIPGhS8mvUl_t3EZzA6tw2M_ofLZU"
          alt="Profile Picture"
          mb={4}
          objectFit="cover"
        />
        <Text fontSize="md" mb={2}>
          I am a software developer
        </Text>
        <Text fontSize="md">
          I am from Haldwani, Uttarakhand
        </Text>
      </Box>
    </Box>
  );
}

export default App;
