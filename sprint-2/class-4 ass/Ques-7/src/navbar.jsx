import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex   justify={"space-between"}
    align={"center"}
    p={4}
    bg={"gray.100"}
    boxShadow={"md"} 
    borderRadius={"md"}
    gap={34} >
      <Link to="/login"
       _hover={{ color: "gray.800" }}> Login</Link>
      <Link to="/home"
       _hover={{ color: "gray.800" }}> Home</Link>
      <Link to="/register"
       _hover={{ color: "gray.800" }}> Register</Link>
       <Link
       to='/users'
       _hover={{ color: "gray.800" }}
       >Users</Link>
    </Flex>
  );
};

export default Navbar;
