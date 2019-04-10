import React from "react";
class Search extends React.Component {
  constructor() {
    super();
    this.state = { searchTerm: "" };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput(e) {
    e.preventDefault();
    this.setState({ searchTerm: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { searchTerm } = this.state;
    console.log(searchTerm);
    const hashURL = `/users/${searchTerm}`;
    this.props.history.push(hashURL);
  }
  render() {
    return (
      <div>
        <h2>Search for user</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            className="u-full-width"
            value={this.state.searchTerm}
            onChange={this.handleUserInput}
          />
          <input
            type="submit"
            value={`Search for: ${this.state.searchTerm}`}
            className="button-primary"
          />
        </form>
      </div>
    );
  }
}

export default Search;
