import React from "react";
class UserProfile extends React.Component {
  constructor(props) {
    super();
    this.state = { userData: null };

    const baseURL = "https://api.github.com";
    const path = `/users/${props.username}`;
    const apiKey = "ca751f6fd2aa9aaff0938bf7e0931ebd4406afdc";
    const params = `?access_token=${apiKey}`;
    const url = baseURL + path + params;
    fetch(url)
      .then(r => r.json())
      .then(data => {
        this.setState({ userData: data });
        console.log(this.state.userData.avatar_url);
      });
  }
  render() {
    if (this.state.userData === null) {
      return <h2>Loading</h2>;
    }
    const { avatar_url, bio, followers, following } = this.state.userData;
    return (
      <div>
        <img src={avatar_url} alt="" />
        <p>{followers}</p>
        <p>{following} </p>
      </div>
    );
  }
}

export default UserProfile;
