import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 footer-left">
              <p>Copyright © 2998 <a href="https://github.com/karlos-Kon-Ka" target="_blank" rel="noopener noreferrer">GITHUB</a> karlos-Kon-Ka.</p>
            </div>
            <div className="col-md-4 col-sm-6 footer-center">
              <p>Sigueme en:</p>
              <a href="https://github.com/karlos-Kon-Ka" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} style={{ marginRight: '10px', color: 'black' }} />
              </a>
              <a href="https://www.linkedin.com/in/carlos-p-26034328b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} style={{ color: '#0077B5' }} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
