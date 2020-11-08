import React, { useContext, useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/core';
import { Context } from '../../store';

const Timer = () => {
  const [state, dispatch] = useContext(Context);
  const counter = state.currentTime;
  const [minute, setMinute] = useState('0');
  const [second, setSecond] = useState('00');

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: 'INCREMENT_COUNTER' });
      console.log(counter);

      const minuteCounter = Math.floor((counter / 10) / 60);
      setMinute(minuteCounter);

      const secondCounter = Math.round((counter / 10) % 60);
      setSecond(String(secondCounter).padStart(2, '0'));
    }, 100);

    return () => clearInterval(interval);
  }, [counter]);

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
