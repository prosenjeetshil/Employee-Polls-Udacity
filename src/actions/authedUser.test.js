import { setAuthedUser, SET_AUTHED_USER } from "./authedUser";

describe("setAuthedUser", () => {
  it("will create an action with type" + SET_AUTHED_USER, () => {
    const id = "my_id";
    const expectation = {
      type: SET_AUTHED_USER,
      id,
    };

    expect(setAuthedUser(id)).toEqual(expectation);
  });
});
