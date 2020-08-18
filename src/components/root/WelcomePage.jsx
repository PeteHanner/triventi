import React from 'react';
import ImportTriviaButton from './ImportTriviaButton';
import { Heading } from '@chakra-ui/core';

const WelcomePage = () => {
  return(
    <div className='main-window'>
      <Heading as='h1' className="white">
        Welcome to Triventi!
      </Heading>

      <ImportTriviaButton/>
    </div>
  )
}

export default WelcomePage