import Settings from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Settings", () => {
  it("should render correctly", () => {
    let SettingsSnapshot = shallow(<Settings/>);
    expect(SettingsSnapshot).toMatchSnapshot();
  });
});