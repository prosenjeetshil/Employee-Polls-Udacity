import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";
import StickyNote from "./StickyNote";

describe("StickyNote component", () => {
  const props = {
    id: "123",
    name: "Jane Doe",
    avatarURL: "www.example.com/avatar.jpg",
    timestamp: 1606952400000,
  };
  const wrapper = shallow(<StickyNote {...props} />);

  it("renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders an Avatar component", () => {
    expect(wrapper.find("Avatar").length).toBe(1);
  });

  it("renders a Link component", () => {
    expect(wrapper.find(Link).length).toBe(1);
  });

  it("renders a Text component", () => {
    expect(wrapper.find("Text").length).toBe(2);
  });

  it("renders a Button component", () => {
    expect(wrapper.find("Button").length).toBe(1);
  });

  it("renders the name of the author", () => {
    expect(wrapper.find("Text").at(0).prop("children")).toBe(props.name);
  });

  it("renders the formatted timestamp", () => {
    expect(wrapper.find("Text").at(1).prop("children")).toBe("Oct 15, 2021");
  });

  it("renders the correct URL in the Link component", () => {
    expect(wrapper.find(Link).prop("to")).toBe(`/questions/${props.id}`);
  });
});
