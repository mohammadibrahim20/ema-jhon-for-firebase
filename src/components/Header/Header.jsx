import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import { AuthContext } from "../Providers/AuthProviders";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then((result) => {})
    .then(error=> console.log(error))
  };

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sing Up</Link>
        {user && (
          <span className="text-white" >
            Welcome {user.email}{" "}
            <button onClick={handleLogOut}>Sign Out</button>{" "}
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
