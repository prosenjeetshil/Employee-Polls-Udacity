import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPoll } from "../actions/shared";
import { Form, Input, Button, Card, Typography } from "antd";

const NewPoll = ({ name, avatarURL, dispatch }) => {
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");
  const navigate = useNavigate();

  const handleCreatePoll = (e) => {
    e.preventDefault();
    dispatch(createPoll(optionOneText, optionTwoText));
    navigate("/");
  };

  return (
    <Fragment>
      <Typography.Title className="my-5" level={3} align="center">New Poll</Typography.Title>
      <div className="d-flex justify-content-center">
        <Card style={{ width: "50%", backgroundColor: "#fff", boxShadow: "0px 0px 15px 0px #ccc" }}>
          <div className="d-flex justify-content-center">
            <div style={{ width: "100px", height: "100px" }}>
              <img src={avatarURL} alt={name} />
            </div>
          </div>
          <Form style={{ padding: "20px" }}>
            <Typography.Title level={5} style={{ textAlign: "center" }}>Would you rather &hellip;</Typography.Title>
            <Form.Item label="Option One">
              <Input.TextArea
                placeholder="Eat some ice cream"
                value={optionOneText}
                onChange={({ target }) => setOptionOneText(target.value)}
              />
            </Form.Item>
            <Form.Item label="Option Two">
              <Input.TextArea
                placeholder="Eat some cake"
                value={optionTwoText}
                onChange={({ target }) => setOptionTwoText(target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                block
                onClick={handleCreatePoll}
                disabled={optionOneText === "" || optionTwoText === ""}
              >
                Create Poll
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  const user = users[authedUser];
  return {
    name: user.name,
    avatarURL: user.avatarURL,
  };
};

export default connect(mapStateToProps)(NewPoll);
