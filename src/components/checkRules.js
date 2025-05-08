// breakRules.js

var Not_rule = 5;

export const BadComponent = function(props) {
  let total = 0;
  for (let i = 0; i < 1000; i++) {
    total += i * Math.random();
  }
  return <h1>I'm JSX in a .js file!</h1>;
}
