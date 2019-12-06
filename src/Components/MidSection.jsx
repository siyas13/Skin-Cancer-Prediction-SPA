import React from 'react';
export default (props) => (
  <div>
    <div className="hr">
    </div>
    <div id="about" className="container-fluid bg-2 text-center">
      <h3>About Me</h3>
      <p className="blockQoute"> &quot; <span className="h1"> I</span> am just a small bot that helps you to check whether there is a possibility of cancer in your skin. I have been trained with lots of knowledge from my master to detect your problem of skin. Please show me your skin so that i can identify skin disease. &quot;</p>
      {props.children}
    </div>
    <div className="hr">
    </div>
    <div className="container">
    </div>
  </div>
);
