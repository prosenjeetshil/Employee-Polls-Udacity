import { SET_AUTHED_USER } from "../actions/authedUser";
import authedUser from "./authedUser";
const AUTHED_USER = "sarahedo";

describe("authedUser", () => {
  it("will return null", () => {
    expect(authedUser(undefined, {})).toBeNull();
  });

  it("will set the authoried user to" + AUTHED_USER, () => {
    expect(authedUser({}, { type: SET_AUTHED_USER, id: AUTHED_USER })).toBe(
      AUTHED_USER
    );
  });
});
