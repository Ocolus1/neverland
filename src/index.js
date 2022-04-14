import React, { Suspense, lazy } from 'react';
// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBreakpoints from 'react-breakpoints'
import { css } from "@emotion/react";
const App = lazy(() => import('./App'));
 
const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920,
}

const load = () => {
  return(
    <div class="spinner-border text-success" style={override} role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  )
}

const override = css`
  display: block;
  margin: 0 auto;
`;

// ReactDOM.render(
//   <ReactBreakpoints breakpoints={breakpoints}>
//       <App />
//   </ReactBreakpoints>,
//   document.getElementById('root'),
// );
ReactDOM.render(
  <ReactBreakpoints breakpoints={breakpoints}>
    <Suspense fallback={load}>
      <App />
    </Suspense>
  </ReactBreakpoints>,
  document.getElementById('root'),
);

