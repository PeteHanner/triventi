import React, { useContext } from 'react';
import { Store } from "../../store.js";
import TriviaCard from './TriviaCard.jsx';

const GamePage = () => {
  const [state] = useContext(Store);

  return(
    <div className='main-window'>
      <TriviaCard
        questionIdx={state.currentQuestionIdx}
      />
    </div>
  )
}

export default GamePage