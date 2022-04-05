import React from 'react'
import DesktopNav from "./DesktopNav"
import TouchNav from "./TouchNav"
import { Media } from 'react-breakpoints'

const Navigation = (props) => {
    
    return (
        <Media>
        {({ breakpoints, currentBreakpoint }) =>
          breakpoints[currentBreakpoint] > breakpoints.tablet ? (
            <DesktopNav linearBtn={props.linearBtn} />
          ) : (
            <TouchNav linearBtn={props.linearBtn} />
          )
        }
      </Media>
    );
}

export default Navigation;

 