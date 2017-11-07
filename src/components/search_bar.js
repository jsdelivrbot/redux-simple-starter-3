import React, { Component } from 'react';

// const SearchBar = () => {
//   return (
//     <div className="input-wrap">
//       <input />
//     </div>
//   );
// };

class SearchBar extends Component {
  // Class based objects only
  // Initialize state
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  render() {
    // Controlled component
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

  // handleInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;