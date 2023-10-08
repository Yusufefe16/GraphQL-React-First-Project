import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return <div>
    <ul>
        <Link to="/">Home</Link>
        <Link to="/new">New</Link>
    </ul>
  </div>;
}

export default Header;
