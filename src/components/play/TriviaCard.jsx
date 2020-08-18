import React, {useContext, useEffect} from 'react';
import { Store } from "../../store.js";
import { useHistory } from 'react-router-dom';
import { Box, Button, Heading, Divider } from "@chakra-ui/core";

const TriviaCard = ({questionIdx}) => {
  const [state] = useContext(Store);
  const history = useHistory();
  const questionObj = state.questions[questionIdx];


  return(
    <Box
      rounded="lg"
      textAlign="center"
      borderWidth="2px"
      background="white"
      padding="2rem"
    >
      <Heading as="h2" size="xl">CATEGORY</Heading>
      <Divider borderColor="black.600" />
      <Heading as="h3" size="lg">QUESTION</Heading>
      <div className="buttons">
        <Button
          variantColor="blue"
          display="block"
          margin="1rem auto"
        >
          ANSWER ONE
        </Button>
        <Button 
          variantColor="yellow"
          display="block"
          margin="1rem auto"
        >
          ANSWER TWO
        </Button>
        <Button
          variantColor="pink"
          display="block"
          margin="1rem auto"
        >
          ANSWER THREE
        </Button>
        <Button 
          variantColor="teal" 
          display="block"
          margin="1rem auto"
        >
          ANSWER FOUR
        </Button>
      </div>
    </Box>
  )
}

export default TriviaCard