import React from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const SignOut = ({ name, avatarURL, dispatch }) => {
  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(null));
  };

  return (
    <div className="columns is-mobile">
      <div className="column">
        <p className="title-color is-6">{name}</p>
      </div>
      <div className="column2">
        <button className="button is-normal is-light is-rounded is-responsive" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  name: users[authedUser].name,
  avatarURL: users[authedUser].avatarURL
});

export default connect(mapStateToProps)(SignOut);
