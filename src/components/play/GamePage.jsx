import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../../store';
import TriviaCard from './TriviaCard';

const GamePage = () => {
  const [state, dispatch] = useContext(Context);
  const history = useHistory();

  const { currentQuestionIdx } = state;
  const questionObj = state.questions[currentQuestionIdx] || { correct_answer: null, incorrect_answers: [null]};
  const { category, question } = questionObj || '';

  const returnHomeIfQuestionsNotLoaded = () => {
    if (!questionObj.correct_answer) {
      history.push('/');
    }
  };

  useEffect(returnHomeIfQuestionsNotLoaded, []);

  const [options, setOptions] = useState([]);

  const shuffleOptions = () => {
    const shuffledOptions = [questionObj.correct_answer, ...questionObj.incorrect_answers];

    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }

    setOptions(shuffledOptions);
  };

  useEffect(shuffleOptions, [currentQuestionIdx]);

  const checkAnswer = (answerGiven) => {
    if (answerGiven === questionObj.correct_answer) {
      dispatch({ type: 'QUESTION_CORRECT' });
    } else {
      dispatch({ type: 'QUESTION_INCORRECT' });
    }
  };

  return (
    <div className="main-window">
      <TriviaCard
        {...{
          category, question, options, checkAnswer,
        }}
      />
    </div>
  );
};

export default GamePage;
