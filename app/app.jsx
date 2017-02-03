import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import YTSearch from 'youtube-api-search';

import Main from 'Main';
import Search from 'Search';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

// Get API KEY

var API_KEY;
try {
  API_KEY = process.env.API_KEY;
} catch (error) {};


// Create new component
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {videos: {}};

    YTSearch({
      key: API_KEY,
      term: 'lexus rc350'
    }, (videos) => {
      this.state = {videos};
    });

  }
  render() {
    return (
      <div>
        <Search/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
