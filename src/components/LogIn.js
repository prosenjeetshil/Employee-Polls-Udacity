import React, { useState } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Select, Form, Button } from "antd";
import { LockOutlined } from '@ant-design/icons';

const { Option } = Select;

const Login = ({ users, dispatch }) => {
  const [selectedUser, setSelectedUser] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(selectedUser));
  };

  const handleSelectUser = (value) => {
    const id =
      value !== ""
        ? users.filter(({ id }) => id === value)[0].id
        : "";
    setSelectedUser(id);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "40%" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Login</h2>

        <LockOutlined
          style={{ fontSize: "5rem", marginBottom: "2rem" }}
        />

        <Form style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "30%" }}>
          <Form.Item style={{ marginBottom: "1rem" }}>
            <Select
              placeholder="Select a user"
              onChange={handleSelectUser}
              value={selectedUser}
              style={{ width: "100%", padding: "0.5rem", fontSize: "1rem", borderRadius: "0.25rem" }}
            >
              <Option value="">Select a user</Option>
              {users.map(({ id, name }) => (
                <Option key={id} value={id}>
                  {name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          {users.length !== 0 && selectedUser !== "" && (
            <Form.Item>
              <Button
                type="primary"
                style={{
                  padding: "0.75rem 1.5rem",
                  fontSize: "1rem",
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "0.25rem",
                  marginTop: "1rem",
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </Form.Item>
          )}
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, authedUser }) => {
  return {
    users: Object.values(users),
  };
};

export default connect(
mapStateToProps)(Login);
