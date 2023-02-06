import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import reducer from "../reducers";
import LogIn from "./LogIn";
const mockStore = configureStore([thunk]);

describe("LogIn", () => {
  let store, component;

  beforeEach(() => {
    store = mockStore({
      authedUser: null,
      users: {
        mtsamis: {
          id: "mtsamis",
          name: "Mike Tsamis",
        },
        zoshikanlu: {
          id: "zoshikanlu",
          name: "Zenobia Oshikanlu",
        },
      },
    });

    store.replaceReducer(reducer);

    component = render(
      <Provider store={store}>
        <Router>
          <LogIn />
        </Router>
      </Provider>
    );
  });

  it("should show an option for each user", async () => {
    const options = screen.queryAllByRole("option").map((option) => ({
      id: option.value,
      name: option.textContent,
    }));
    const users = Object.values(store.getState().users);
    users.forEach((user) => {
      const option = options.filter(({ id }) => id === user.id).pop();
      expect(option).toMatchObject(user);
    });
  });

  it("should select a user", () => {
    const dropdown = screen.getByRole("combobox");
    const option = screen.getByRole("option", { name: "Mike Tsamis" });
    fireEvent.change(dropdown, { target: { value: option.value } });
    expect(option.selected).toBe(true);
  });

  it("should match the snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});