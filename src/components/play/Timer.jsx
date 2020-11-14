import React, { useContext, useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/core';
import { Context } from '../../store';
import { calculateMinutes, calculateSecondsRemainder } from '../../utils/time';

const Timer = () => {
  const [state, dispatch] = useContext(Context);
  const { timer } = state;
  const [minute, setMinute] = useState('0');
  const [second, setSecond] = useState('00');

  useEffect(() => {
    let isSubscribed = true;
    const interval = setInterval(() => {
      dispatch({ type: 'INCREMENT_TIMER' });

      setMinute(calculateMinutes(timer));
      setSecond(calculateSecondsRemainder(timer));
    }, 100);

    return () => {
      isSubscribed = false;
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <Box
      rounded="sm"
      borderWidth="2px"
      background="white"
      padding=".5rem"
      margin="1rem"
      position="absolute"
      top="1rem"
      left="93%"
      minWidth="5rem"
    >
      <Text fontWeight="bold">Time:</Text>
      <Text fontWeight="bold">
        {minute}
        :
        {second}
      </Text>
    </Box>
  );
};

export default Timer;
