import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../context/GithubContext';
import { fetchUser, getUserRepos } from '../context/GithubActions';
import RepoList from '../components/RepoList';
import Spinner from '../components/Spinner';

const User = () => {
  const params = useParams();
  const { user, dispatch, loading, repos } = useContext(GithubContext);
  useEffect(() => {
    const getUser = async () => {
      dispatch({ type: 'SET_LOADING' });
      const user = await fetchUser(params.user);
      dispatch({ type: 'FETCH_USER', payload: user });
      const repos = await getUserRepos(params.user);
      dispatch({ type: 'GET_USER_REPOS', payload: repos });
    };
    getUser();
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="p-5">
            <div className="container">
              <div className="row">
                <div className="col-md">
                  <img
                    width="100%"
                    className="rounded fluid"
                    src={user.avatar_url}
                    alt={user.login}
                  />
                </div>
                <div className="col-md-4">
                  <div className="card  mb-3">
                    <div className="card-body">
                      <h4 className="card-title">{user.name}</h4>
                      <p className="card-text text-muted">{user.login}</p>
                      <div class="table-responsive">
                        <table className="table " width="100%">
                          <tbody>
                            {user.company && (
                              <tr>
                                <th scope="row">Company</th>

                                <td>{user.company}</td>
                              </tr>
                            )}
                            {user.blog && (
                              <tr>
                                <th scope="row">Blog</th>
                                <td>{user.blog}</td>
                              </tr>
                            )}
                            {user.email && (
                              <tr>
                                <th scope="row">Email</th>
                                <td>{user.email}</td>
                              </tr>
                            )}
                            {user.location && (
                              <tr>
                                <th scope="row">Location</th>
                                <td>{user.location}</td>
                              </tr>
                            )}
                            {user.twitter_username && (
                              <tr>
                                <th scope="row">Twitter</th>
                                <td>{user.twitter_username}</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card text-white bg-primary mb-3">
                    <div className="card-header">Bio and Stats</div>
                    <div className="card-body">
                      <h6 className="card-title"> {user.bio}</h6>
                      <div class="table-responsive">
                        <table className="table table-primary" width="100%">
                          <tbody>
                            <tr>
                              <th scope="row">Public Repos</th>

                              <td>{user.public_repos}</td>
                            </tr>
                            <tr>
                              <th scope="row">Public Gists</th>
                              <td>{user.public_gists}</td>
                            </tr>
                            <tr>
                              <th scope="row">Followers</th>
                              <td>{user.followers}</td>
                            </tr>
                            <tr>
                              <th scope="row">Following</th>
                              <td>{user.following}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <a
                        href={user.html_url}
                        className="btn btn-success btn-block"
                      >
                        Visit Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="p-5">
            <div className="container">
              <h3 className="text-center display-6 mb-5">User Repositories</h3>
              <RepoList repos={repos} />
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default User;
