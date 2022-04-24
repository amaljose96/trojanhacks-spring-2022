import TranscriptView from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("TranscriptView", () => {
  it("should render correctly", () => {
    let TranscriptViewSnapshot = shallow(<TranscriptView/>);
    expect(TranscriptViewSnapshot).toMatchSnapshot();
  });
});