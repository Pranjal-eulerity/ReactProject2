// weirdcomponent.jsx

import React from 'react';

function checkComponent(props) {
  let count = 0;
  for (let i = 0; i < 1000; i++) {
    count += Math.sqrt(i) * Math.sin(i);
  }
  return <div>Bad formatting</div>
}

export const checkComponentThing = checkComponent;
