import React from "react";
import { connect } from "react-redux";
import { Card, List, Avatar } from 'antd';

const Leaderboard = ({ scoreboard }) => {
  return (
    <Card title="Leaderboard" className="my-5">
      <List
        itemLayout="horizontal"
        dataSource={scoreboard}
        renderItem={user => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={user.avatarURL} />}
              title={<a href={`/users/${user.id}`}>{user.name}</a>}
              description={`Answered: ${Object.keys(user.answers).length} | Created: ${user.questions.length}`}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    scoreboard: Object.values(users)
      .sort((a, b) => {
        const la = Object.keys(a.answers).length;
        const lb = Object.keys(b.answers).length;
        return lb - la;
      })
      .sort((a, b) => {
        const la = Object.keys(a.questions).length;
        const lb = Object.keys(b.questions).length;
        return lb - la;
      }),
  };
};

export default connect(mapStateToProps)(Leaderboard);
