import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import "./App.scss";
import LogIn from "./LogIn";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import NotFound from "./404";
import Leaderboard from "./Leaderboard";
import Poll from "./Poll";
import NewPoll from "./NewPoll";

const MainApp = ({ authorized, dispatch }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Fragment>
      <Nav />
      <div className="main-container">
        <Routes>
          {authorized ? (
            <Fragment>
              <Route path="/" element={<Dashboard />} exact />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/add" element={<NewPoll />} />
              <Route path="/questions/:id" element={<Poll />} />
              <Route path="*" element={<NotFound />} />
            </Fragment>
          ) : (
            <Fragment>
              <Route path="*" element={<LogIn />} />
            </Fragment>
          )}
        </Routes>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authorized: authedUser !== null,
});

export default connect(mapStateToProps)(MainApp);
