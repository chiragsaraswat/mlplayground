const GithubReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'SEARCH_USERS':
      return { ...state, loading: false, users: action.payload };
    case 'FETCH_USER':
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case 'GET_USER_REPOS':
      return {
        ...state,
        loading: false,
        repos: action.payload,
      };
    default:
      return state;
  }
};

export default GithubReducer;
