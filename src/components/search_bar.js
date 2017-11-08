import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="input-wrap">
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
        <p>Value: {this.state.term}</p>
      </div>
    );
  }
}

export default SearchBar;