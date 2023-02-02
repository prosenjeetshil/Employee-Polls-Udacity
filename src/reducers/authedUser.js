import { SET_AUTHED_USER } from "../actions/authedUser";

function authedUser(state = null, { type, id }) {
  switch (type) {
    case SET_AUTHED_USER:
      return id;

    default:
      return state;
  }
}

export default authedUser;
