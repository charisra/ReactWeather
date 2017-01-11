var React = require('react');

var About = (props) => {
  return (
    <div>
  <h1 className="text-center page-title">About</h1>
  <p>A cool weather app built on React.</p>
  <p>Here are some of the tools used.</p>
  <ol>
    <li>
      <a href="https://facebook.github.io/react">React</a>
    </li>
    <li>
      <a href="http://openweathermap.org">Open Weather Map</a>
    </li>
    <li>
      <a href="http://foundation.zurb.com/">Foundation</a>
    </li>
  </ol>
  </div>
  );
}

module.exports = About;
