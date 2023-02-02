import {
  createQuestion,
  CREATE_QUESTION,
  receiveUsers,
  RECEIVE_USERS,
  saveAnswer,
  SAVE_ANSWER,
} from "./users";

describe("receiveQuestions", () => {
  it("will create an action with type " + RECEIVE_USERS, () => {
    const users = { users: "users" };
    const expectation = {
      type: RECEIVE_USERS,
      users,
    };

    expect(receiveUsers(users)).toEqual(expectation);
  });
});

describe("saveAnswer", () => {
  it("will create an action with type " + SAVE_ANSWER, () => {
    const authedUser = "sarahedo";
    const qid = "8xf0y6ziyjabvozdd253nd";
    const answer = "optionTwo";
    const expectation = {
      type: SAVE_ANSWER,
      authedUser,
      qid,
      answer,
    };

    expect(saveAnswer(authedUser, qid, answer)).toEqual(expectation);
  });
});

describe("createQuestion", () => {
  it("will create an action with type " + CREATE_QUESTION, () => {
    const id = "id";
    const author = "author";
    const expectation = {
      type: CREATE_QUESTION,
      id,
      author,
    };

    expect(createQuestion({ id, author })).toEqual(expectation);
  });
});
