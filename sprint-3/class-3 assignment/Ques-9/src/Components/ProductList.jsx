import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Heading,
  Spinner,
  Image,
  Menu,
  MenuList,
  MenuButton,
  Button,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import fetchProducts from "../redux/thunk/fetchingProducts";

const ProductList = () => {
  const dispatch = useDispatch();

  // State to manage sorting order
  const [sortOrder, setSortOrder] = useState("asc"); // Default to ascending

  // Select specific parts of the state
  const { data, loading, error } = useSelector((state) => state.products);

  // Fetch products with the current sorting order
  useEffect(() => {
    dispatch(fetchProducts(sortOrder));
  }, [dispatch, sortOrder]);

  const handleSortChange = (order) => {
    setSortOrder(order); // Update sorting order
  };

  if (loading) {
    return(<>
    <Box  
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"

    >
    <Spinner w="100%" h="100%" color="blue.500" />
<Spinner w="100%" h="100%" />
<h1>
  Loading...  Loading...  Loading...  Loading...
  Loading...  Loading...  Loading...  Loading...
  Loading...  Loading...  Loading...   Loading...
  Loading...  Loading...  Loading...  Loading...
  Loading...  Loading...  Loading...  Loading...
  Loading...  Loading...  Loading...  Loading...
  Loading...  Loading...  Loading...   Loading...
  Loading...  Loading...  Loading...  Loading...
</h1>
<Spinner w="100%" h="100%" />
    </Box>


    </>
    );
  }

  if (error) {
    return <Box>{error.message}</Box>;
  }

  return (
    <Box   display="grid"
    gridTemplateColumns={{
      base: "repeat(1, 1fr)", // 1 item per row on mobile
      sm: "repeat(2, 1fr)", // 2 items per row on small screens
      md: "repeat(3, 1fr)", // 3 items per row on medium screens
      lg: "repeat(4, 1fr)", // 4 items per row on large screens
      
    }}
    gap={4}
    justifyContent="center">
      <Heading>Product List</Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Sort by
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => handleSortChange("asc")}>
            Price: Low to High
          </MenuItem>
          <MenuItem onClick={() => handleSortChange("desc")}>
            Price: High to Low
          </MenuItem>
        </MenuList>
      </Menu>
      <Box

>
  {data?.data?.map((product) => (
    <Box key={product.id} textAlign={"center"} maxWidth={300}>
      <Heading size="md">{product.title}</Heading>
      <Image
        src={product.image}
        width={"80%"}
        margin={"auto"}
        display={"block"}
        height={"300px"}
      />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
    </Box>
  ))}
</Box>
    </Box>
  );
};

export default ProductList;
