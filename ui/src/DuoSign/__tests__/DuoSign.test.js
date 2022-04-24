import DuoSign from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("DuoSign", () => {
  it("should render correctly", () => {
    let DuoSignSnapshot = shallow(<DuoSign/>);
    expect(DuoSignSnapshot).toMatchSnapshot();
  });
});