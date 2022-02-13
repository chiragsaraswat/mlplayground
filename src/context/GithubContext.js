import { createContext, useReducer } from 'react';
import GithubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const intialState = {
    loading: false,
    users: [],
    user: {},
    repos: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, intialState);
  return (
    <GithubContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
