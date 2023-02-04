import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Login from "./Login";
import "./setupTests.js";

const mockStore = configureStore([]);

describe("Login component", () => {
  let store;
  let dispatchMock;

  beforeEach(() => {
    store = mockStore({
      users: [
        { id: "1", name: "User1" },
        { id: "2", name: "User2" },
        { id: "3", name: "User3" },
      ],
      authedUser: null,
    });
    dispatchMock = jest.fn();
    store.dispatch = dispatchMock;
  });

  it("renders and selects a user", () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const select = getByPlaceholderText("Select a user");
    fireEvent.change(select, { target: { value: "2" } });
    const loginButton = getByText("Login");
    fireEvent.click(loginButton);

    expect(dispatchMock).toHaveBeenCalledWith({
      type: "SET_AUTHED_USER",
      id: "2",
    });
  });
});
