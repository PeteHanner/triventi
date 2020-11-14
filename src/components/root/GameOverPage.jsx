import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Heading, Text } from '@chakra-ui/core';
import { Context } from '../../store';
import { calculateMinutes, calculateSecondsRemainder } from '../../utils/time';

const GameOverPage = () => {
  const history = useHistory();
  const [state] = useContext(Context);
  const { timer } = state;

  const returnHomeIfQuestionsNotLoaded = () => {
    if (state.questions.length < 1) {
      history.push('/');
    }
  };

  useEffect(returnHomeIfQuestionsNotLoaded, []);

  return (
    <div id="main-window">
      <Heading as="h1" color="white">
        Game Over
      </Heading>
      <Text color="white">
        {`You got ${state.score} points in a time of ${calculateMinutes(timer)}:${calculateSecondsRemainder(timer)}`}
      </Text>
    </div>
  );
};

export default GameOverPage;
