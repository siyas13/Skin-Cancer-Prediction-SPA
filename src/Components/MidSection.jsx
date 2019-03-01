import React from 'react';
export default (props) => (
<div className="container-fluid bg-2 text-center">
  <h3>What Am I?</h3>
  <p>Iam just a small bot that helps you to check whether there is a possibility of cancer in your skin. I have been trained with lots of knowledge from my master to detect your problem of skin. Please show me your skin so that i can identify skin disease.</p>
  {props.children}
</div>
);