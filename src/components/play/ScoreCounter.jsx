import React, { useContext } from 'react';
import { Box } from '@chakra-ui/core';
import { Context } from '../../store';

const ScoreCounter = () => {
  const [state, dispatch] = useContext(Context);

  return (
    <Box>
      {state.score}
    </Box>
  );
};

export default ScoreCounter;
