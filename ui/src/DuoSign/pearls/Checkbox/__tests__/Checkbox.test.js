import Checkbox from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Checkbox", () => {
  it("should render correctly", () => {
    let CheckboxSnapshot = shallow(<Checkbox/>);
    expect(CheckboxSnapshot).toMatchSnapshot();
  });
});