import React, { useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Button, Spinner } from '@chakra-ui/core';
import { Context } from '../../store';

const ImportTriviaButton = () => {
  const [state, dispatch] = useContext(Context);
  const history = useHistory();

  const loadTrivia = () => {
    dispatch({ type: 'FETCH_TRIVIA_START' });
    const questions = [];

    axios.get('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple&encode=url3986')
      .then((response) => {
        const easyQuestions = response.data.results;
        questions.push(...easyQuestions);
        return axios.get('https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple&encode=url3986');
      })
      .then((response) => {
        const mediumQuestions = response.data.results;
        questions.push(...mediumQuestions);
        return axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple&encode=url3986');
      })
      .then((response) => {
        const hardQuestions = response.data.results;
        questions.push(...hardQuestions);

        dispatch({
          type: 'FETCH_TRIVIA_SUCCESS',
          payload: questions,
        });

        history.push('/play');
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_TRIVIA_FAILURE', payload: error });
      });
  };

  const clickMe = () => (
    <Button
      onClick={loadTrivia}
    >
      Click me to fetch trivia
    </Button>
  );

  const pleaseWait = () => (
    <Spinner>Loading trivia...</Spinner>
  );

  return (
    <>
      {state.isFetching ? pleaseWait() : clickMe()}
    </>
  );
};

export default ImportTriviaButton;
