import React from 'react';
import { Box, Button, Heading, Divider, Text } from "@chakra-ui/core";

const TriviaCard = ({ category, question, options }) => {
  return(
    <Box
      rounded="lg"
      textAlign="center"
      borderWidth="2px"
      background="white"
      padding="2rem"
    >
      <Heading as="h2" size="xl">{category}</Heading>
      <Divider borderColor="black.600" />
      <Heading as="h3" size="lg">{question}</Heading>
      <div className="buttons">
        <Button
          variantColor="blue"
          display="block"
          margin="1rem auto"
        >
          <Text>{options[0]}</Text>
        </Button>
        <Button 
          variantColor="yellow"
          display="block"
          margin="1rem auto"
        >
          <Text>{options[1]}</Text>
        </Button>
        <Button
          variantColor="pink"
          display="block"
          margin="1rem auto"
        >
          <Text>{options[2]}</Text>
        </Button>
        <Button 
          variantColor="teal" 
          display="block"
          margin="1rem auto"
        >
          <Text>{options[3]}</Text>
        </Button>
      </div>
    </Box>
  )
}

export default TriviaCard