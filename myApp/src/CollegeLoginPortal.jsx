import React from "react";
import Header from "./header/Header";
import Portal from "./Login/Portal ";

export default function CollegeLoginPortal() {

  const styleDiv = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100vw',
    bottom: '0',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.8)',
  }

  const styleSpan = {
    margin: '0',
    color: 'white',    
    fontFamily: "'Germania One', cursive",
    fontSize: '2rem'
  }

  return (
    <React.Fragment>
      <Header />
      <Portal />
      <div style={styleDiv}>
        <span style={styleSpan}>Coding Based Assignment</span>
        <span style={styleSpan}>~ Nagesh Singh</span>
      </div>
    </React.Fragment>
  );
}