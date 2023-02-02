import {
  ADD_QUESTION,
  RECEIVE_QUESTIONS,
  SAVE_VOTE,
} from "../actions/questions";
import questions from "./questions";

describe("questions", () => {
  it("will return empty state", () => {
    expect(questions(undefined, {})).toEqual({});
  });

  it("will create a state with received data", () => {
    const question = {
      id: "id",
      optionOne: { text: "optionOne", votes: [] },
      optionTwo: { text: "optionTwo", votes: [] },
    };
    const expectation = {
      [question.id]: { ...question },
    };
    const state = questions(
      {},
      {
        type: RECEIVE_QUESTIONS,
        questions: expectation,
      }
    );

    expect(state).toEqual(expectation);
  });

  it("will return a state with an updated vote list", () => {
    const authedUser = "sarahedo";
    const qid = "8xf0y6ziyjabvozdd253nd";
    const answer = "optionOne";
    const question = {
      id: "8xf0y6ziyjabvozdd253nd",
      author: "sarahedo",
      optionOne: {
        votes: [],
      },
      optionTwo: {
        votes: [],
      },
    };
    const expectation = {
      [question.id]: {
        ...question,
        [answer]: {
          ...question[answer],
          votes: [authedUser].concat(question[answer].votes),
        },
      },
    };
    const state = questions(
      {
        [question.id]: { ...question },
      },
      {
        type: SAVE_VOTE,
        authedUser,
        qid,
        answer,
      }
    );

    expect(state).toEqual(expectation);
  });

  it("will return a state with a new question", () => {
    const question = {
      id: "id",
    };
    const expectation = {
      [question.id]: { ...question },
    };
    const state = questions({}, { type: ADD_QUESTION, question });

    expect(state).toEqual(expectation);
  });
});
