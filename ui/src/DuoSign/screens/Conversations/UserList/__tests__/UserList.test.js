import UserList from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("UserList", () => {
  it("should render correctly", () => {
    let UserListSnapshot = shallow(<UserList/>);
    expect(UserListSnapshot).toMatchSnapshot();
  });
});