import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const formatDate = timestamp => {
  const date = new Date(timestamp);
  const time = date.toLocaleTimeString("en-US").substring(0, 5) + date.toLocaleTimeString("en-US").slice(-2);
  return `${time} | ${date.toLocaleDateString()}`;
};

export const withRouter = Component => props => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  return <Component {...props} router={{ location, navigate, params }} />;
};
