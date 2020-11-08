import React from 'react';
import { Heading } from '@chakra-ui/core';
import ImportTriviaButton from './ImportTriviaButton';

const WelcomePage = () => (
  <div id="main-window">
    <Heading
      as="h1"
      color="white"
      margin="1rem"
    >
      Welcome to Triventi!
    </Heading>

    <ImportTriviaButton />
  </div>
);

export default WelcomePage;
