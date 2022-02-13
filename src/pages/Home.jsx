import React, { useState, useContext } from 'react';
import GithubContext from '../context/GithubContext';
import { searchUsers } from '../context/GithubActions';
import UserList from '../components/UserList';
import Spinner from '../components/Spinner';
const Home = () => {
  const [username, setUsername] = useState('');
  const { loading, dispatch, users } = useContext(GithubContext);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_LOADING' });
    const users = await searchUsers(username);
    dispatch({ type: 'SEARCH_USERS', payload: users });
  };
  return (
    <>
      <section style={{ minHeight: '70vh' }}>
        <div className="container">
          <form onSubmit={onSubmitHandler}>
            <div className="row mt-5">
              <div className="input-group mb-3 input-group-lg w-100">
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Enter Github Username"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    id="button-addon2"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>

          {loading ? (
            <Spinner />
          ) : (
            <div>
              <UserList users={users} />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
