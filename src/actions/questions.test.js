import {
  addQuestion,
  ADD_QUESTION,
  receiveQuestions,
  RECEIVE_QUESTIONS,
  saveVote,
  SAVE_VOTE,
} from "./questions";

describe("receiveQuestions", () => {
  it("will create an action with type " + RECEIVE_QUESTIONS, () => {
    const questions = {
      "8xf0y6ziyjabvozdd253nd": {
        id: "8xf0y6ziyjabvozdd253nd",
        author: "sarahedo",
        timestamp: 1467166872634,
        optionOne: {
          votes: ["sarahedo"],
          text: "Build our new application with Javascript",
        },
        optionTwo: {
          votes: [],
          text: "Build our new application with Typescript",
        },
      },
    };
    const expectation = {
      type: RECEIVE_QUESTIONS,
      questions,
    };

    expect(receiveQuestions(questions)).toEqual(expectation);
  });
});

describe("saveVote", () => {
  it("will create an action with type " + SAVE_VOTE, () => {
    const authedUser = "sarahedo";
    const qid = "8xf0y6ziyjabvozdd253nd";
    const answer = "optionTwo";
    const expectation = {
      type: SAVE_VOTE,
      authedUser,
      qid,
      answer,
    };

    expect(saveVote(authedUser, qid, answer)).toEqual(expectation);
  });
});

describe("addQuestion", () => {
  it("will create an action with type " + ADD_QUESTION, () => {
    const question = { question: "question" };
    const expectation = {
      type: ADD_QUESTION,
      question,
    };

    expect(addQuestion(question)).toEqual(expectation);
  });
});
