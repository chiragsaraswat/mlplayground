import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  return (
    <div className="col-md-3 p-3">
      <div className="card">
        <div className="card-body">
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div>
              <img
                style={{ width: '40px' }}
                className="rounded-circle fluid"
                src={user.avatar_url}
                alt={user.login}
              />
            </div>
            <div>
              <h6 style={{ marginBottom: 0 }}>{user.login}</h6>
              <Link to={`/users/${user.login}`}>Github Profile</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
