import React, {useContext, useEffect, useState} from 'react';
import { Context } from "../../store.js";
import { useHistory } from 'react-router-dom';
import { Box, Button, Heading, Divider, Text } from "@chakra-ui/core";

const TriviaCard = ({questionIdx}) => {
  const history = useHistory();
  const [state] = useContext(Context);
  const questionObj = state.questions[questionIdx];

  const returnHomeIfQuestionNotLoaded = () => {
    if (!questionObj) {
      history.push('/')
    }
  }

  useEffect(returnHomeIfQuestionNotLoaded, [])

  const [options, setOptions] = useState([])

  const shuffleOptions = () => {
    if (questionObj) {
      const shuffledOptions = [questionObj.correct_answer, ...questionObj.incorrect_answers];

      for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
      }
    setOptions(shuffledOptions)
    }
  }

  useEffect(shuffleOptions, [])

  return(
    questionObj
    ?
    <Box
      rounded="lg"
      textAlign="center"
      borderWidth="2px"
      background="white"
      padding="2rem"
    >
      <Heading as="h2" size="xl">{questionObj.category}</Heading>
      <Divider borderColor="black.600" />
      <Heading as="h3" size="lg">{questionObj.question}</Heading>
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
    :
    <div />
  )
}

export default TriviaCard