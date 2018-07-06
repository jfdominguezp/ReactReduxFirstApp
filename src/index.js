import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyCpcfZny9QrHv_QoC5BB8kfgsavY0PPzbA';

// Create a new component. This component should produce some html
const App = () => {
  return (
    <div>Hi!</div>
  );
}


//Take this component's genertated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
