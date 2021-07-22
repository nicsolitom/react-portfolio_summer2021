import React from 'react'
import '../styles/About.scss';

export default function About() {
    return (
      <div className="AboutContainer">
        <h5>About</h5>
        <br />
        <p>Links to my pages online:</p>
        <a href="https://github.com/nicsolitom">
          <i class="fab fa-github"></i> 
        </a>
        <br />
        <a href="https://www.linkedin.com/in/nicsolitom/">
          <i class="fab fa-linkedin"></i> 
        </a>
      </div>
    );
}
