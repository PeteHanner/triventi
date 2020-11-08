import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Timer from './Timer';
import { Context } from '../../store';
import ScoreCounter from './ScoreCounter';
import TriviaCard from './TriviaCard';

const GamePage = () => {
  const [state, dispatch] = useContext(Context);
  const history = useHistory();

  const { currentQuestionIdx } = state;
  const questionObj = state.questions[currentQuestionIdx] || {
    correct_answer: null,
    incorrect_answers: [null],
  };
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

    for (let i = shuffledOptions.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }

    setOptions(shuffledOptions);
  };

  const endGame = () => {
    dispatch({ type: 'GAME_OVER' });
    history.push('/game-over');
  };

  const shuffleOptionsOrEndGame = () => {
    if (currentQuestionIdx < 30) {
      shuffleOptions();
    } else {
      endGame();
    }
  };

  useEffect(shuffleOptionsOrEndGame, [currentQuestionIdx]);

  const flashCorrect = () => {
    document.getElementById('main-window').classList.add('flash-correct');

    setTimeout(() => {
      document.getElementById('main-window').classList.remove('flash-correct');
    }, 300);
  };

  const flashIncorrect = () => {
    document.getElementById('main-window').classList.add('flash-incorrect');

    setTimeout(() => {
      document.getElementById('main-window').classList.remove('flash-incorrect');
    }, 500);
  };

  const checkAnswer = (answerGiven) => {
    if (answerGiven === questionObj.correct_answer) {
      flashCorrect();
      dispatch({ type: 'QUESTION_CORRECT' });
    } else {
      flashIncorrect();
      dispatch({ type: 'QUESTION_INCORRECT' });
    }
  };

  return (
    <div id="main-window">
      <ScoreCounter />
      <Timer {...{ endGame }} />
      <TriviaCard
        {...{
          category, question, options, checkAnswer,
        }}
      />
    </div>
  );
};

export default GamePage;
