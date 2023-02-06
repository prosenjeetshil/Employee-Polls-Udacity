import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const Login = ({ users, dispatch }) => {
  const [selectedUser, setSelectedUser] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(selectedUser));
  };

  const handleSelectUser = ({ target }) => {
    const id =
      target.value !== ""
        ? users.filter(({ id }) => id === target.value)[0].id
        : "";
    setSelectedUser(id);
  };

  return (
    <div className="has-text-centered">
      <div className="columns is-centered">
        <div className="column is-two-fifths">
          <h2 className="is-size-2 my-5">Login</h2>

          <p>
            <FontAwesomeIcon
              className="my-5"
              icon={solid("lock")}
              size="10x"
            />
          </p>

          <form className="my-5">
            <div className="select">
              <select
                name="user"
                id="login-as"
                onChange={handleSelectUser}
                defaultValue={selectedUser}
                role="combobox"
              >
                <option value="">Select a user</option>
                {users.map(({ id, name }) => (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            {users.length !== 0 && selectedUser !== "" && (
              <button className="button is-primary" onClick={handleLogin}>
                Login
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, authedUser }) => {
  return {
    users: Object.values(users),
  };
};

export default connect(mapStateToProps)(Login);