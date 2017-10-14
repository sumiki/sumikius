import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Sumiki Ohsawa Consultant</h1>
        </div>
        <div className="wrapper">
          <div className="contents">
          <h2>What I do</h2>
          <p>I am a Software Consultant / Web Application Developer for businesses.</p>

          <dl>
            <dt>My Goal</dt>
            <dd>Provide the system to reduce redundant tasks and help your business grow.</dd>
            <dt>My approach</dt>
            <dd>Simple. I listen how business is processing daily bases and I create software to automate the process.</dd>
            <dt>My Skills</dt>
            <dd>
              Ruby on Rails, JavaScript, React, Linux, Oracle, etc.
            </dd>
          </dl>


          <h2>Contact</h2>
          <p>If you have IT problem or you would like to have IT solution for your business, Please email me. I may be able to help.</p>
          <a id="send_mail_button" href="mailto:sumikio.inquiries@gmail.com" target="_blank" >Email Me</a><span id="email">sumikio.inquiries@gmail.com</span>

          </div>
        </div>

        <div className="footer">
          <div className="footer_inner">
            <ul>
              <li><a href="http://www.linkedin.com/pub/sumiki-ohsawa/13/796/252" target="_blank"><img src="/linkedin.png" width="20px;" /></a></li>
            </ul>
            <div className="footer_logo">Sumiki Ohsawa Consultant</div>
          </div>
          <div className="clear"></div>
        </div>

      </div>
    );
  }
}

export default App;
