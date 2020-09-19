import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Button, Heading, Divider, Text,
} from '@chakra-ui/core';

const TriviaCard = ({
  category, question, options, checkAnswer,
}) => (
  <Box
    rounded="lg"
    textAlign="center"
    borderWidth="2px"
    background="white"
    padding="2rem"
  >
    <Heading as="h2" size="xl">{decodeURIComponent(category)}</Heading>
    <Divider borderColor="black.600" />
    <Heading as="h3" size="lg">{decodeURIComponent(question)}</Heading>
    <div className="buttons">
      <Button
        variantColor="blue"
        display="block"
        margin="1rem auto"
        onClick={checkAnswer}
      >
        <Text>{decodeURIComponent(options[0])}</Text>
      </Button>
      <Button
        variantColor="yellow"
        display="block"
        margin="1rem auto"
        onClick={checkAnswer}
      >
        <Text>{decodeURIComponent(options[1])}</Text>
      </Button>
      <Button
        variantColor="pink"
        display="block"
        margin="1rem auto"
        onClick={checkAnswer}
      >
        <Text>{decodeURIComponent(options[2])}</Text>
      </Button>
      <Button
        variantColor="teal"
        display="block"
        margin="1rem auto"
        onClick={checkAnswer}
      >
        <Text>{decodeURIComponent(options[3])}</Text>
      </Button>
    </div>
  </Box>
);

TriviaCard.defaultProps = {
  category: '',
  question: '',
  options: ['', '', '', ''],
};
TriviaCard.propTypes = {
  category: PropTypes.string,
  question: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  checkAnswer: PropTypes.func.isRequired,
};

export default TriviaCard;
