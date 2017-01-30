import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

// Create new component
const App = () => {
  return <div>Hi!</div>
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
