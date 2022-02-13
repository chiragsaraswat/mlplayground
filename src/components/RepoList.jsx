import React from 'react';
import RepoItem from './RepoItem';

const RepoList = ({ repos }) => {
  if (repos.length === 0) {
    return (
      <div className="row">
        <p className="lead text-info">User has no Public Repositories Yet!!</p>
      </div>
    );
  } else {
    return (
      <div className="row">
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    );
  }
};

export default RepoList;
