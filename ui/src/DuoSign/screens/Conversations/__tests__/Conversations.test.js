import Conversations from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Conversations", () => {
  it("should render correctly", () => {
    let ConversationsSnapshot = shallow(<Conversations/>);
    expect(ConversationsSnapshot).toMatchSnapshot();
  });
});