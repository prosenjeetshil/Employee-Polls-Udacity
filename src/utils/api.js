import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from "./_DATA";

function fetchData() {
  return Promise.all([_getUsers(), _getQuestions()])
    .then(([users, questions]) => ({ users, questions }))
    .catch((error) => {
      console.error("An error occurred with fetchData: ", error);
    });
}

function saveQuestion(question) {
  return _saveQuestion(question)
    .catch((error) => {
      console.error("An error occurred with saveQuestion: ", error);
    });
}

function saveQuestionAnswer(authedUser, qid, answer) {
  return _saveQuestionAnswer({ authedUser, qid, answer })
    .catch((error) => {
      console.error("An error occurred with saveQuestionAnswer: ", error);
      throw error;
    });
}

export { fetchData, saveQuestion, saveQuestionAnswer };
