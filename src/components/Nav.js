import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SignOut from "./SignOut";

const Nav = ({ authedUser }) => {
  const [open, setOpen] = useState(false);

  const handleBurger = () => setOpen(!open);

  return (
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
      <p className="navbar-item">Employee Polls</p>
      <div className="navbar-brand">
        <button
          className={`navbar-burger${open ? " is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="main-navbar"
          onClick={handleBurger}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div id="main-navbar" className={`navbar-menu${open ? " is-active" : ""}`}>
        <div className="navbar-start">
          {authedUser && (
            <Fragment>
              <div className="navbar-item">
                <Link to="/">Home</Link>
              </div>
              <div className="navbar-item">
                <Link to="/leaderboard">Leaderboard</Link>
              </div>
              <div className="navbar-item">
                <Link to="/add">New Poll</Link>
              </div>
            </Fragment>
          )}
        </div>
        {authedUser && (
          <div className="navbar-end">
            <div className="navbar-item">
              <SignOut />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser: users[authedUser],
});

export default connect(mapStateToProps)(Nav);
