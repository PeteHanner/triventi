import React, { useContext } from 'react';
import { Store } from "../store.js";
import axios from "axios";
import { Button, Dimmer, Loader } from 'semantic-ui-react'

const WelcomePage = () => {
  const [state, dispatch] = useContext(Store)

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
      <Dimmer active>
        <Loader inverted indeterminate>Loading trivia...</Loader>
      </Dimmer>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        {state.isFetching ? pleaseWait() : clickMe()}
      </header>
    </div>
  );
}

export default WelcomePage