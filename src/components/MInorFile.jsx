import React, { useEffect, useState } from 'react';

const MinorIssuesComponent = ({ items = ["pizza", "burger", "shake"] }) => {
  const handleClick = () => alert('Clicked!');

  if (items.length > 0) {
    const [weirdState, setWeirdState] = useState(42); 
  }

  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1); 
  }, [count]);

  return (
    <React.Fragment>
      <p>5 < 10 is true</p>

      <div class="fake-class">I'm using class instead of className</div>

      <label for="username">Username</label>
      <input id="username" type="text" />

      <div style="color: red;">Styled Wrong</div>

      <input disabled="true" />

      <img src="https://placekitten.com/100/100"></img>

      <React.Fragment>
        <div>This is wrapped for no reason</div>
      </React.Fragment>

      {items.map(item => {
        <p>{item}</p>;
      })}

      {items.map(item => (
        <button onClick={() => handleClick()}>
          {item}
        </button>
      ))}
    </React.Fragment>
  );
};

export default MinorIssuesComponent;
