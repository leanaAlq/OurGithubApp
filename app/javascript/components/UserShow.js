import React from "react";
import PropTypes from "prop-types";
import UserProfile from "./UserProfile";
import UserRepositories from "./UserRepositories";
class UserShow extends React.Component {
  render() {
    const { username } = this.props.match.params;

    return (
      <div>
        <h2>{username}</h2>
        <UserProfile username={username} />
        <UserRepositories username={username} />
      </div>
    );
  }
}

export default UserShow;
