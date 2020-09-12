import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from "../../store.js";
import TriviaCard from './TriviaCard.jsx';

const GamePage = () => {
  // initialize values
  const [state] = useContext(Context);
  const history = useHistory();

  const { currentQuestionIdx } = state;
  const questionObj = state.questions[currentQuestionIdx];
  let { category, question } = questionObj || "";

  const returnHomeIfQuestionsNotLoaded = () => {
    if (!questionObj) {
      history.push('/')
    }
  }

  useEffect(returnHomeIfQuestionsNotLoaded, [])

  const [options, setOptions] = useState([])

  const shuffleOptions = () => {
    if (questionObj) {
      const shuffledOptions = [questionObj.correct_answer, ...questionObj.incorrect_answers];

      for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
      }

      setOptions(shuffledOptions)
    }
  }

  useEffect(shuffleOptions, [])

  return(
    <div className='main-window'>
      <TriviaCard
        {...{ category, question, options }}
      />
    </div>
    )
  }

  export default GamePage