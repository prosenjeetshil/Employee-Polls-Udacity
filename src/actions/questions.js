const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
const SAVE_VOTE = "SAVE_VOTE";
const ADD_QUESTION = "ADD_QUESTION";

const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

const saveVote = (authedUser, qid, answer) => ({
  type: SAVE_VOTE,
  authedUser,
  qid,
  answer,
});

const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question,
});

export {
  RECEIVE_QUESTIONS,
  SAVE_VOTE,
  ADD_QUESTION,
  receiveQuestions,
  saveVote,
  addQuestion,
};
