import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBreakpoints from 'react-breakpoints'
import App from "./App"

const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920,
}



ReactDOM.render(
  <ReactBreakpoints breakpoints={breakpoints}>
    <App />
  </ReactBreakpoints>,
  document.getElementById('root'),
);

