import React from 'react';

const IForm = () => {
  return (
    <form action="/submit" method="POST">
      <h2>Contact Us</h2>
      <input type="text" name="username" placeholder="Enter your name" />
      <button></button>
      <img src="https://source.unsplash.com/random/100x100" />
      <button type="submit"></button>
    </form>
  );
};

export default IForm;