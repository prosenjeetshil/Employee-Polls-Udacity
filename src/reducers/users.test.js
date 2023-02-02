import { CREATE_QUESTION, RECEIVE_USERS, SAVE_ANSWER } from "../actions/users";
import users from "./users";

describe("users", () => {
  it("will return empty state", () => {
    expect(users(undefined, {})).toEqual({});
  });

  it("will create a state with received data", () => {
    const user = {
      id: "id",
    };
    const expectation = {
      [user.id]: { ...user },
    };
    const state = users(
      {},
      {
        type: RECEIVE_USERS,
        users: expectation,
      }
    );

    expect(state).toEqual(expectation);
  });

  it("will return a state with the user's vote saved to the question", () => {
    const authedUser = "user_id";
    const qid = "question_id";
    const answer = "answer_id";
    const user = {
      id: "user_id",
      answers: {},
    };
    const expectation = {
      [user.id]: {
        ...user,
        answers: {
          ...user.answers,
          [qid]: answer,
        },
      },
    };
    const state = users(
      {
        [user.id]: { ...user },
      },
      {
        type: SAVE_ANSWER,
        authedUser,
        qid,
        answer,
      }
    );

    expect(state).toEqual(expectation);
  });

  it("will return a state with the new question added to the user", () => {
    const id = "question_id";
    const user = {
      id: "user_id",
      questions: [],
    };
    const expectation = {
      [user.id]: {
        ...user,
        questions: [id].concat(user.questions),
      },
    };
    const state = users(
      {
        [user.id]: { ...user },
      },
      { type: CREATE_QUESTION, author: user.id, id }
    );

    expect(state).toEqual(expectation);
  });
});
