import React, { useState } from "react";
import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";

const MyUi = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    alert(`Hello, ${name}!`);
  };

  return (
    <Box
      maxW="500px"
      mx="auto"
      mt={10}
      p={5}
      boxShadow="lg"
      borderRadius="md"
      bg="gray.50"
    >
      {/* Heading */}
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Greeting Baby
      </Heading>

      {/* Use a standard form element here */}
      <form onSubmit={handleSubmit}>
        {/* Input Field */}
        <Input
          placeholder="Enter your name"
          mb={4}
          borderColor="teal.400"
          focusBorderColor="teal.600"
          size="lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Button */}
        <Button
          type="submit"
          colorScheme="teal"
          size="lg"
          width="full"
          mb={6}
          _hover={{ bg: "teal.600" }}
        >
          Submit
        </Button>
      </form>

      {/* Card Component */}
      <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        borderRadius="md"
        bg="white"
        _hover={{ shadow: "xl" }}
      >
        <Heading fontSize="lg">Live  Preview Below</Heading> 

        <Text mt={4}>Hello {name}</Text>
      </Box>
    </Box>
  );
};

export default MyUi;
