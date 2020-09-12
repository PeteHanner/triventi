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

  // force root path if trying to load this page directly/before prop ready
  const returnHomeIfQuestionsNotLoaded = () => {
    if (!questionObj) {
      history.push('/')
    }
  }

  useEffect(returnHomeIfQuestionsNotLoaded, [])

  // decode HTML entities in API strings
  const htmlEntities = {
    '&quot;': '"',
    '&amp;': "&",
    '&#039;': "'",
    '&shy;': '­',
  };

  const htmlDecode = (string) => {
    let decoded = string;
    if (!decoded) { return string }

    for (const key in htmlEntities) {
      decoded = decoded.replaceAll(key, htmlEntities[key])
    }
    return decoded
  }

  // decode category and question
  [category, question] = [htmlDecode(category), htmlDecode(question)]

  // shuffle and decode answers
  const [options, setOptions] = useState([])

  const shuffleOptions = () => {
    if (questionObj) {
      const shuffledOptions = [questionObj.correct_answer, ...questionObj.incorrect_answers];

      for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
      }

      for (let option in shuffleOptions) {
        option = htmlDecode(option)
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