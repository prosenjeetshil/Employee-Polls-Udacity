import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import Login from "./Login";

describe("Login component", () => {
  let store;
  let wrapper;
  let mockStore;
  let users = [
    {
      id: "1",
      name: "user1",
    },
    {
      id: "2",
      name: "user2",
    },
  ];

  beforeEach(() => {
    mockStore = configureStore();
    store = mockStore({
      users,
    });
    wrapper = mount(
      <Provider store={store}>
        <Login />
      </Provider>
    );
  });

  it("renders the Login component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("displays a dropdown list of users", () => {
    expect(wrapper.find("Select").length).toBe(1);
    expect(wrapper.find("Option").length).toBe(3); // including the default "Select a user" option
  });

  it("updates the selected user when the dropdown value changes", () => {
    wrapper
      .find("Select")
      .simulate("change", { target: { value: users[1].id } });
    expect(wrapper.find("Select").props().value).toBe(users[1].id);
  });

  it("disables the login button when no user is selected", () => {
    expect(wrapper.find("Button").props().disabled).toBe(true);
  });

  it("enables the login button when a user is selected", () => {
    wrapper
      .find("Select")
      .simulate("change", { target: { value: users[0].id } });
    expect(wrapper.find("Button").props().disabled).toBe(false);
  });

  it("dispatches the setAuthedUser action when the login button is clicked", () => {
    wrapper
      .find("Select")
      .simulate("change", { target: { value: users[0].id } });
    wrapper.find("Button").simulate("click");
    expect(store.getActions()).toEqual([
      {
        type: "SET_AUTHED_USER",
        id: users[0].id,
      },
    ]);
  });
});
