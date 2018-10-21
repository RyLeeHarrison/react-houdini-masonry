import React from 'react';

import flaggs from './chromeflaggs.jpg';

import './NoSupport.css';

export default () => (
  <div className="Message">
    <h1 className="Message-content">Enable experimental web platform features</h1>
    <p className='Message-url-box'>chrome://flags/#enable-experimental-web-platform-features</p>
    <img className='Message-image' src={flaggs} alt="enable experimental web platform features" />
  </div>
);