import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Heading } from '@chakra-ui/core';
import { Context } from '../../store';

const GameOverPage = () => {
  const [state] = useContext(Context);
  const history = useHistory();

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
    </div>
  );
};

export default GameOverPage;
