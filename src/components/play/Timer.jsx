import React, { useContext, useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/core';
import { Context } from '../../store';

const Timer = () => {
  const [state, dispatch] = useContext(Context);
  const timer = state.timer;
  const [minute, setMinute] = useState('0');
  const [second, setSecond] = useState('00');

  useEffect(() => {
    let isSubscribed = true;
    const interval = setInterval(() => {
      dispatch({ type: 'INCREMENT_timer' });

      const minuteTimer = Math.floor((timer / 10) / 60);
      setMinute(minuteTimer);

      const secondTimer = Math.round((timer / 10) % 60);
      setSecond(String(secondTimer).padStart(2, '0'));
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
