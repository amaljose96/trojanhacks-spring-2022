import Meeting from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Meeting", () => {
  it("should render correctly", () => {
    let MeetingSnapshot = shallow(<Meeting/>);
    expect(MeetingSnapshot).toMatchSnapshot();
  });
});