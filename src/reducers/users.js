import { 
  RECEIVE_USERS,
  SAVE_ANSWER,
  CREATE_QUESTION 
} from "../actions/users";

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case SAVE_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };

    case CREATE_QUESTION:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: [action.id].concat(state[action.author].questions),
        },
      };

    default:
      return state;
  }
};

export default users;

