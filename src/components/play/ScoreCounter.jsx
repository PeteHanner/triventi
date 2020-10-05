import React, { useContext } from 'react';
import { Box, Text } from '@chakra-ui/core';
import { Context } from '../../store';

const ScoreCounter = () => {
  const [state, dispatch] = useContext(Context);

  return (
    <Box
      rounded="sm"
      borderWidth="2px"
      background="white"
      padding=".5rem"
      margin="1rem"
    >
      <Text fontWeight="bold">
        {state.score}
      </Text>
    </Box>
  );
};

export default ScoreCounter;
