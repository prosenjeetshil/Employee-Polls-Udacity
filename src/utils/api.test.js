// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
import { fetchData, saveQuestion, saveQuestionAnswer } from "./data";

describe("Data functions", () => {
  it("fetchData returns data", async () => {
    const data = await fetchData();
    expect(data).toEqual({
      users: expect.any(Object),
      questions: expect.any(Object),
    });
  });

  it("saveQuestion saves a question", async () => {
    const question = {
      optionOneText: "Option one",
      optionTwoText: "Option two",
      author: "User 1",
    };

    const savedQuestion = await saveQuestion(question);
    expect(savedQuestion).toEqual({
      ...question,
      id: expect.any(String),
      timestamp: expect.any(Number),
    });
  });

  it("saveQuestionAnswer saves a question answer", async () => {
    const authedUser = "User 1";
    const qid = "abc123";
    const answer = "optionOne";

    const savedAnswer = await saveQuestionAnswer(authedUser, qid, answer);
    expect(savedAnswer).toEqual({
      authedUser,
      qid,
      answer,
      timestamp: expect.any(Number),
    });
  });
});
