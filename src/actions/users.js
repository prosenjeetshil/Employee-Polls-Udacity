const RECEIVE_USERS = "RECEIVE_USERS";
const SAVE_ANSWER = "SAVE_ANSWER";
const CREATE_QUESTION = "CREATE_QUESTION";

const receiveUsers = (users) => {
return { 
  type: RECEIVE_USERS, 
  users };
};

const saveAnswer = (userId, questionId, answerId) => {
return {
  type: SAVE_ANSWER,
  authedUser: userId,
  qid: questionId,
  answer: answerId,
};
};

const createQuestion = ({ id, author }) => {
return {
  type: CREATE_QUESTION,
  id,
  author,
};
};

export { 
  RECEIVE_USERS, 
  SAVE_ANSWER, 
  CREATE_QUESTION, 
  receiveUsers, 
  saveAnswer, 
  createQuestion 
};