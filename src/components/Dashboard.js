import React, { useState } from "react";
import { connect } from "react-redux";
import { Layout, Button, Typography } from "antd";
import StickyNote from "./StickyNote";

const { Content } = Layout;

const Dashboard = ({ unanswered, completed, all }) => {
  const [viewState, setViewState] = useState("UNANSWERED");
  const [title, setTitle] = useState("Unanswered Polls");
  const [list, setList] = useState(unanswered);

  const handleChangeView = (value) => {
    setViewState(value);
    switch (value) {
      case "UNANSWERED":
        setTitle("Unanswered Polls");
        setList(unanswered);
        break;
      case "COMPLETED":
        setTitle("Completed Polls");
        setList(completed);
        break;
      case "ALL":
        setTitle("All Polls");
        setList(all);
        break;
      default:
        break;
    }
  };

  return (
    <Layout className="my-5">
      <Content className="d-flex flex-column align-items-center">
      <Typography.Title level={3} style={{ color: 'black' }}>Dashboard</Typography.Title>
        <div className="d-flex justify-content-center my-5">
          <Button.Group>
            <Button
              type={viewState === "UNANSWERED" ? "primary" : "default"}
              onClick={() => handleChangeView("UNANSWERED")}
            >
              Unanswered Polls
            </Button>
            <Button
              type={viewState === "COMPLETED" ? "primary" : "default"}
              onClick={() => handleChangeView("COMPLETED")}
            >
              Completed Polls
            </Button>
            <Button
              type={viewState === "ALL" ? "primary" : "default"}
              onClick={() => handleChangeView("ALL")}
            >
              All Polls
            </Button>
          </Button.Group>
        </div>
        <h3 className="is-size-5">{title}</h3>
        <div className="d-flex flex-wrap">
          {list.map((id) => (
            <StickyNote key={id} id={id} />
          ))}
        </div>
      </Content>
    </Layout>
  );
};


const mapStateToProps = ({ authedUser, users, questions }) => {
  const { answers } = users[authedUser];

  const completed = Object.keys(answers)
    .map((id) => questions[id])
    .sort((a, b) => b.timestamp - a.timestamp)
    .map(({ id }) => id);

  const unanswered = Object.values(questions)
    .sort((a, b) => b.timestamp - a.timestamp)
    .filter(({ id }) => !completed.includes(id))
    .map(({ id }) => id);

  const all = Object.values(questions)
    .sort((a, b) => b.timestamp - a.timestamp)
    .map(({ id }) => id);

  return {
    unanswered,
    completed,
    all,
  };
};

export default connect(mapStateToProps)(Dashboard);
