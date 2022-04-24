import TextInput from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("TextInput", () => {
  it("should render correctly", () => {
    let TextInputSnapshot = shallow(<TextInput/>);
    expect(TextInputSnapshot).toMatchSnapshot();
  });
});