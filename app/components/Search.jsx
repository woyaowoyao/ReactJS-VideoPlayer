import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <div>
        <input value={this.state.term} onChange={event => this.setState({text: event.target.value})}/>
        <p>Value of input: {this.state.text}</p>
      </div>
    );
  }
}

export default Search;
