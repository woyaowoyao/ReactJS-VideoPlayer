import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import Search from 'Search';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

// Get API KEY
/*try {
  var config = {
      apiKey: process.env.API_KEY,
  };

  firebase.initializeApp(config);
} catch (e) {
}*/

var apiKey = process.env.API_KEY;
console.log(apiKey);

// Create new component
const App = () => {
  return (
    <div>
      <Search/>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
