import ConversationHistory from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("ConversationHistory", () => {
  it("should render correctly", () => {
    let ConversationHistorySnapshot = shallow(<ConversationHistory/>);
    expect(ConversationHistorySnapshot).toMatchSnapshot();
  });
});