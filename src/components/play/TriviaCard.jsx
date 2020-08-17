import React, {useContext, useEffect} from 'react';
import { Store } from "../../store.js";
import { useHistory } from 'react-router-dom';
import { Card, Header, Button } from "semantic-ui-react";

const TriviaCard = ({questionIdx}) => {
  const [state] = useContext(Store);
  const history = useHistory();
  const questionObj = state.questions[questionIdx];

  const returnHomeIfNoQuestion = () => {
    if (questionObj === null) {
      history.push('/')
    }
  }

  const shuffleOptions = () => {
    const orderedOptions = [questionObj.correct_answer, ...questionObj.incorrect_answers];
    console.log(questionObj);
    console.log(orderedOptions)
    const options = [];
  }

  useEffect(returnHomeIfNoQuestion, [])
  useEffect(shuffleOptions, [questionObj])

  return(
    questionObj ?
    <Card>
      <Card.Content>
        <Card.Header>{questionObj.category}</Card.Header>
      </Card.Content>
      <Card.Content>
      <Header as="h3">{questionObj.question}</Header>
        <Button
          color="blue"
          size="huge"
        >
          Option One
        </Button>

        <div className="gap" />

        <Button
          color="yellow"
          size="huge"
        >
          Option Two
        </Button>

        <div className="gap" />

        <Button
          color="pink"
          size="huge"
        >
          Option Three
        </Button>

        <div className="gap" />

        <Button
          color="teal"
          size="huge"
        >
          Option Four
        </Button>
      </Card.Content>
    </Card>
    :
    <div />
  )
}

export default TriviaCard