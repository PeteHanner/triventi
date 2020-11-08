import React, { createContext, useReducer } from 'react';

const initialState = {
  isFetching: false,
  questions: [],
  currentQuestionIdx: 0,
  score: 0,
  currentTime: 0,
  finalTime: 0,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_TRIVIA_START':
      return {
        ...state,
        isFetching: true,
      };
    case 'FETCH_TRIVIA_SUCCESS':
      return {
        ...state,
        isFetching: false,
        questions: action.payload,
      };
    case 'FETCH_TRIVIA_FAILURE': {
      const error = action.payload;
      alert(`There was an error fetching trivia: ${error.message}. Please try again.`);
      return {
        ...state,
        isFetching: false,
      };
    }
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        currentTime: state.currentTime + 1,
      };
    case 'QUESTION_CORRECT':
      return {
        ...state,
        currentQuestionIdx: state.currentQuestionIdx + 1,
        score: state.score + 1,
      };
    case 'QUESTION_INCORRECT':
      return {
        ...state,
        currentQuestionIdx: state.currentQuestionIdx + 1,
      };
    case 'GAME_OVER':
      return {
        ...state,
        finalTime: action.payload,
      };
    default:
      throw new Error();
  }
};

export const Context = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      { children }
    </Context.Provider>
  );
};
