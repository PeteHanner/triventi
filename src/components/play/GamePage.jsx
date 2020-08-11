import React, { useContext, useEffect } from 'react';
import { Store } from "../../store.js";
import { useHistory } from 'react-router-dom';

const GamePage = () => {
  const [state, dispatch] = useContext(Store);
  const history = useHistory();

  const goBackHome = () => {
    if (state.questions.length < 30) {
      history.push('/')
    }
  }

  useEffect(() => {
    goBackHome();
  }, [])

  return(
    <div>
      {JSON.stringify(state.questions)}
    </div>
  )
}

export default GamePage