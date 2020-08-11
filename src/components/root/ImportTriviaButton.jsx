import React, { useContext, Fragment } from 'react';
import { Store } from "../../store.js";
import axios from "axios";
import { Button, Loader } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';

const ImportTriviaButton = () => {
  const [state, dispatch] = useContext(Store);
  const history = useHistory();

  const loadTrivia = () => {
    dispatch({ type: "FETCH_TRIVIA_START" })
    const questions = [];

    axios.get("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
      .then(response => {
        const easyQuestions = response.data.results;
        questions.push(...easyQuestions);
        return axios.get("https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple")
      })
      .then(response => {
        const mediumQuestions = response.data.results;
        questions.push(...mediumQuestions);
        return axios.get("https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple")
      })
      .then(response => {
        const hardQuestions = response.data.results;
        questions.push(...hardQuestions);

        dispatch({
          type: "FETCH_TRIVIA_SUCCESS",
          payload: questions,
        });

        history.push('/play')
      })
      .catch(error => {
        dispatch({ type: "FETCH_TRIVIA_FAILURE", payload: error })
      })
  }

  const clickMe = () => {
    return (
      <Button
        primary
        onClick={loadTrivia}
      >
        Click me to fetch trivia
      </Button>
    );
  }

  const pleaseWait = () => {
    return (
      <Loader active inline indeterminate>Loading trivia...</Loader>
    );
  }

  return (
    <Fragment>
      {state.isFetching ? pleaseWait() : clickMe()}
    </Fragment>
  );
}

export default ImportTriviaButton