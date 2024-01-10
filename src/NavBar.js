import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/posts">
        <button>Posts</button>
      </Link>
      <Link to="/users">
        <button>Users</button>
      </Link>
    </div>
  )
}

export default NavBar;