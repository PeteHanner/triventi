import React, { useContext, Fragment } from 'react';
import { Store } from "../../store.js";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { Button, Spinner } from "@chakra-ui/core";

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
        onClick={loadTrivia}
      >
        Click me to fetch trivia
      </Button>
    );
  }

  const pleaseWait = () => {
    return (
      <Spinner>Loading trivia...</Spinner>
    );
  }

  return (
    <Fragment>
      {state.isFetching ? pleaseWait() : clickMe()}
    </Fragment>
  );
}

export default ImportTriviaButton