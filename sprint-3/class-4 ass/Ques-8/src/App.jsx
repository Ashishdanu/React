import "./App.css";
import { Box, Text, Heading, Flex, Image } from "@chakra-ui/react";

function App() {
  const imglink =
    "data:image/jpeg;base64,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";
  return (
    <>

      <Box  backgroundColor={'gray'} textAlign={"center"} m={0} p={0}>
        <Heading>OUR CLIENTS SPEAK</Heading>
        <Text>We HAve Been Working With Clients Around the World</Text>

        <Flex justifyContent={"space-evenly"} flexWrap={"wrap"}>
          <Box textAlign={"center"} width={'300px'}>
            <Box  backgroundColor={'white'} p={'5'} borderRadius={'20px'} mb={'5px'}> 
              <Text fontSize={"2xl"}>Effecient Collaborating</Text>
              <Text>
                We have been working with clients around the world Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Illum aliquid
                doloribus odit fugit excepturi recusandae ex doloremque possimus
                ad illo dolorem vero, ipsa repudiandae eius quas praesentium
                dolores eos aliquam?
              </Text>
            </Box>
            <Image src={imglink} alt="Vite_Logo" margin={"auto"} width={'100px'} borderRadius={'50%'}/>
            <Text fontSize={"xl"}>Ashu Dhasu</Text>
            <Text fontSize={"large"}>CEO at KBC</Text>
          </Box>
          <Box textAlign={"center"} width={'300px'} >
            <Box backgroundColor={'white'} p={'5'} borderRadius={'20px'} mb={'5px'}
          >
              <Text fontSize={"2xl"}>Effecient Collaborating</Text>
              <Text>
                We have been working with clients around the world Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Illum aliquid
                doloribus odit fugit excepturi recusandae ex doloremque possimus
                ad illo dolorem vero, ipsa repudiandae eius quas praesentium
                dolores eos aliquam?
              </Text>
            </Box>
            <Image src={imglink} alt="Vite_Logo" margin={"auto"} width={'100px'} borderRadius={'50%'}/>
            <Text fontSize={"xl"}>Ashu Dhasu</Text>
            <Text fontSize={"large"}>CEO at KBC</Text>
          </Box>
          <Box textAlign={"center"} width={'300px'}>
            <Box  backgroundColor={'white'} p={'5'} borderRadius={'20px'} mb={'5px'}>
              <Text fontSize={"2xl"}>Effecient Collaborating</Text>
              <Text>
                We have been working with clients around the world Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Illum aliquid
                doloribus odit fugit excepturi recusandae ex doloremque possimus
                ad illo dolorem vero, ipsa repudiandae eius quas praesentium
                dolores eos aliquam?
              </Text>
            </Box>
            <Image src={imglink} alt="Vite_Logo" margin={"auto"} width={'100px'} borderRadius={'50%'}/>
            <Text fontSize={"xl"}>Ashu Dhasu</Text>
            <Text fontSize={"large"}>CEO at KBC</Text>
          </Box>





          
        </Flex>
      </Box>
    </>
  );
}

export default App;
