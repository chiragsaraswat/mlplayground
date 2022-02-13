import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="p-5 bg-primary">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem' }}>
          <a href="https://github.com/coolorbi">
            <i className="fa-brands fa-github fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/chiragsaraswat/">
            <i className="fa-brands fa-linkedin fa-2x"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram fa-2x"></i>
          </a>
        </div>
        <div className="container">
          <p className="text-center text-light lead mt-3">
            Copyright &copy; {year}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
