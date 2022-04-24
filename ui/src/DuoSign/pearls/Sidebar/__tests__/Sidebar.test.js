import Sidebar from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Sidebar", () => {
  it("should render correctly", () => {
    let SidebarSnapshot = shallow(<Sidebar/>);
    expect(SidebarSnapshot).toMatchSnapshot();
  });
});