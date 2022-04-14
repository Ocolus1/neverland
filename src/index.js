import React, { Suspense, lazy } from 'react';
// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBreakpoints from 'react-breakpoints'
import { css } from "@emotion/react";
// import App from "./App"
import BounceLoader from "react-spinners/BounceLoader";
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
    <BounceLoader color={'#36D7B7'} isLoading={true}
       css={override} size={150} />
  )
}

const override = css`
    display: block;
    position: absolute;
    top: 40%;
    left: 45%;
    margin:  auto;
    border-color: red;
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

