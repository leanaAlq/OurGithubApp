import React from "react";
import PropTypes from "prop-types";
class UserRepositories extends React.Component {
  constructor(props) {
    super();
    this.state = { userRepos: null };

    const baseURL = "https://api.github.com";
    const path = `/users/${props.username}/repos`;
    const apiKey = "ca751f6fd2aa9aaff0938bf7e0931ebd4406afdc";
    const params = `?access_token=${apiKey}`;
    const url = baseURL + path + params;
    fetch(url)
      .then(r => r.json())
      .then(data => {
        this.setState({ userRepos: data });
        console.log(this.state.userRepos);
      });
  }
  render() {
    if (this.state.userRepos === null) {
      return <h3>Loading..</h3>;
    }
    const listItems = this.state.userRepos.map(repo => {
      return (
        <li key={repo.id}>
          <a href={repo.html_url}>{repo.full_name}</a>
        </li>
      );
    });
    return (
      <div>
        <h2>{this.props.username}'s Repos</h2>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default UserRepositories;
