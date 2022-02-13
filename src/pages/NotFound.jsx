import React from 'react';

const NotFound = () => {
  return (
    <section>
      <div className="container text-center p-5">
        <img
          src="/images/404-error.png"
          alt="Not Found"
          width="300"
          className="fluid"
        />
        <h1 className="text-center dispaly-6">Oops! Page not found!!</h1>
      </div>
    </section>
  );
};

export default NotFound;
