import { useState } from "react";
import { ChakraProvider, Box, Flex, Text, Button ,Heading} from "@chakra-ui/react";

const Form = () => {
  const [users, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: name,
      email: email,
      password: password,
      userID: users.length + 1,
    };
    setUser([...users, newUser]);
    console.log(users);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <ChakraProvider>
        <Box
        p={4}>
 <form onSubmit={HandleSubmit}>
    <Box
    p={4}>
    <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
    </Box>
    <Box
    p={4}
    mb={2}>

    <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
    </Box>
    <Box
    p={4}
    mb={2}>
    <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
    </Box>
       
    
       
        <Button type="submit" variant="solid" colorScheme="blue" size="lg"
        boxShadow="md"  p={4}
        mb={2}>
        
          Submit
        </Button>
      </form>
      <Gallery users={users}/>
        </Box>
     
     
      </ChakraProvider>
  );
};


const Card = ({ user }) => {
  return (
    <Box
    borderWidth='1px'
    borderRadius='lg'
    
    p={4}
    m={2}>
      <Heading size="lg">Welcome : {user.name}</Heading>
      <Text>ID :{user.userID}</Text>
    </Box>
  );
};

const Gallery = ({users}) => {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" color="gray.800">
        Danu` ~ `Gallery
      </Text>

      <Flex direction="column" align="center" justify="center" p={4}>
        {users.map((user) => {
            return (
          <Card key={user.userID} user={user} /> )

        })}
      </Flex>
    </Box>
  );
};

export default Form;