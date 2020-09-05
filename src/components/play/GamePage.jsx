import React, { useContext } from 'react';
import { Context } from "../../store.js";
import TriviaCard from './TriviaCard.jsx';

const GamePage = () => {
  const [state] = useContext(Context);

  return(
    <div className='main-window'>
      <TriviaCard
        questionIdx={state.currentQuestionIdx}
      />
    </div>
  )
}

export default GamePage