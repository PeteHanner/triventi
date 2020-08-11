import React from 'react';
import { Card, Header, Button } from "semantic-ui-react";

const TriviaCard = () => {

  return(
    <Card>
      <Card.Content>
        <Card.Header>Trivia Category</Card.Header>
      </Card.Content>
      <Card.Content>
        <Header as="h3">This is where the trivia question goes</Header>
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
  )
}

export default TriviaCard