import React from 'react';
import { Heading } from '@chakra-ui/core';
import ImportTriviaButton from './ImportTriviaButton';

const WelcomePage = () => (
  <div id="main-window">
    <Heading as="h1" className="white">
      Welcome to Triventi!
    </Heading>

    <ImportTriviaButton />
  </div>
);

export default WelcomePage;
