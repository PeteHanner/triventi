import React from 'react';
import { Header } from 'semantic-ui-react'
import ImportTriviaButton from './ImportTriviaButton';

const WelcomePage = () => {
  return(
    <div className='main-window'>
      <Header as='h1'>
        Welcome to Triventi!
      </Header>

      <ImportTriviaButton/>
    </div>
  )
}

export default WelcomePage