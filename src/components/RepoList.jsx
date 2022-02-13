import React from 'react';
import RepoItem from './RepoItem';

const RepoList = ({ repos }) => {
  return (
    <div className="row">
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;
