import Chat from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Chat", () => {
  it("should render correctly", () => {
    let ChatSnapshot = shallow(<Chat/>);
    expect(ChatSnapshot).toMatchSnapshot();
  });
});