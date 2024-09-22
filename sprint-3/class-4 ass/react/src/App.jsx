import { useState } from "react";
import "./App.css";
import { Image, Box, Text, Flex, Button } from "@chakra-ui/react";

function App() {
  const pic =
    "https://media.licdn.com/dms/image/v2/D4D03AQEXXNQfudlKcw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1726945115108?e=1732752000&v=beta&t=BbR3sOyPkFMbm4OhvdC-skbjZ6pK3PRBpj0fZ5mSA6w";

  return (
    <Flex
      flexDirection={"column"}
      width={"400px"}
      height={"400px"}
      margin={"auto"}
      align={"center"}
      justify={"space-evenly"}
      textAlign={"center"}
      boxShadow={"md"} 
      borderRadius={"10px"} 
      padding={"20px"} 
    >
      {/* Profile Picture */}
      <Image
        src={pic}
        borderRadius="50%"
        width={"120px"}
        height={"120px"}
        margin={"auto"}
        mb={"20px"} // Add some margin bottom to separate from the name
      />

      {/* Name and Handle */}
      <Text fontSize={"xl"} fontWeight={"bold"}>
        Ashish Danu
      </Text>
      <Text fontSize={"md"} color={"gray.500"}>
        @_ashish.danu
      </Text>

      {/* Bio */}
      <Text fontSize={"md"} mb={"20px"}>
        Actress, musician, songwriter, and artist. PM for work inquiries or #tag
        <br />
        #ashishdanu
        <br />
        Me in Your Posts
      </Text>

      {/* Tags */}
      <Box display={"flex"} gap={"10px"} justifyContent={"space-around"}>
        <Text backgroundColor={'gray'}  color={'white'}  fontSize={"x-small"}>#ART</Text>
        <Text  backgroundColor={'gray'}  color={'white'} fontSize={"x-small"}>#PHOTOGRAPHY</Text>
        <Text  backgroundColor={'gray'} color={'white'} fontSize={"xx-small"}>#MUSIC</Text>
      </Box>

      {/* Buttons */}
      <Box mt={"20px"}>
        <Button
          color={"white"}
          backgroundColor={"#4267B2"} // Facebook blue
          size="sm"
          margin={"10px"}
          borderRadius={'20%'}
          _hover={{ backgroundColor: "#3e61a8", border: "1px solid #3e61a8" }}
        >
          Message
        </Button>
        <Button
          variant="outline"
          color={"#4267B2"} // Facebook blue
          backgroundColor={"transparent"}
          size="sm"
          margin={"10px"}
          borderRadius={'20%'}
          border={"1px solid #4267B2"} // outline border
          _hover={{ backgroundColor: "teal", border: "1px solid #3e61a8" }}
        >
          Follow
        </Button>
      </Box>
    </Flex>
  );
}

export default App;