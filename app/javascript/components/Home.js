import React from "react";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Search for Github Accounts</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus in
          tempore, sed totam optio cupiditate tenetur fugit atque necessitatibus
          a ad aspernatur amet iure voluptas omnis nesciunt natus fugiat. Atque.
        </p>
        <Link to="/search">
          <button className="button-primary">Search </button>
        </Link>
      </div>
    );
  }
}

export default Home;
