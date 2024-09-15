import React from 'react';
import { Box, Image, Text, Button, Flex } from '@chakra-ui/react';

// Example product data
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$20.00',
    image: 'https://via.placeholder.com/150',
    description: 'This is a description for Product 1.',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$30.00',
    image: 'https://via.placeholder.com/150',
    description: 'This is a description for Product 2.',
  },
  // Add more products if needed
];

const ProductCard = ({ product }) => {
  return (
    <Box 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden" 
      boxShadow="md" 
      p={4}
      bg="white"
      maxW="sm"
      m={2}
    >
      <Image src={product.image} alt={product.name}
      w="100%" h="150px" objectFit="cover"
       />
      <Text fontWeight="bold" mt={2}
      fontSize="lg">
        {product.name}
      </Text>
      <Text color="gray.500"
      fontSize="sm">
        {product.price}
      </Text>
      <Text mt={2}>
        {product.description}
      </Text>
      <Button mt={4} colorScheme="teal"
      size="sm">
        Buy Now
      </Button>
    </Box>
  );
};

const ProductGallery = () => {
  return (
    <Flex 
      wrap="wrap" 
      justify="center" 
      p={4} 
      bg="gray.100"
      
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Flex>
  );
};

export default ProductGallery;
