import React from 'react';

const RepoItem = ({ repo }) => {
  return (
    <div className="col-md-3">
      <div className="card text-white bg-primary mb-3">
        <div className="card-header">
          <span className="text-warning">{repo.language}</span>
        </div>
        <div className="card-body">
          <h4 className="card-title text-danger">{repo.name}</h4>
          <p className="card-text">{repo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
