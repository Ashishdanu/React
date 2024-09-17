import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react';
import React from 'react';

const Users = () => {
  // Assume we have a list of users stored in a state or retrieved from an API
  const users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'janedoe@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bobsmith@example.com' },
  ];

  return (
    <Box>
      <Heading as="h1">Users</Heading>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <Text>
              <span>{user.name}</span> ({user.email})
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Users;