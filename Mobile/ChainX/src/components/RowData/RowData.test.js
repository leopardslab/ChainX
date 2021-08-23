import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { shallow, mount, render, configure, wrapper } from "enzyme";
import { RowData } from "./index";
import { Box, FlatList, Text, Image, View } from "native-base";

import * as redux from 'react-redux'

const spy = jest.spyOn(redux, 'useDispatch')
spy.mockReturnValue(jest.fn());


import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("<RowData />", () => {
  it("rendered as expected when data loading", () => {
    const rowData = shallow(
      <RowData
      name = {"Name"}
      value = {"Value"}
      itemDataIsLoading = {true}
      />
    );

    
    expect(rowData.props().width).toBe("100%");
    expect(rowData.props().shadow).toBe(3);
    expect(rowData.props().children.props.children.props.children[0].props.children.props.children).toBe("Name");
    expect(rowData.props().children.props.children.props.children[0].props.children.props.size).toBe("sm");
    expect(rowData.props().children.props.children.props.children[0].props.children.props.bold).toBe(true);
    expect(rowData.props().children.props.children.props.children[1].props.width).toBe("40%");

  });

  it("rendered as expected when data loaded", () => {
    const rowData = shallow(
      <RowData
      name = {"Name"}
      value = {"Value"}
      itemDataIsLoading = {false}
      />
    );

    
    expect(rowData.props().width).toBe("100%");
    expect(rowData.props().shadow).toBe(3);
    expect(rowData.props().children.props.children.props.children[0].props.children.props.children).toBe("Name");
    expect(rowData.props().children.props.children.props.children[0].props.children.props.size).toBe("sm");
    expect(rowData.props().children.props.children.props.children[0].props.children.props.bold).toBe(true);
    expect(rowData.props().children.props.children.props.children[1].props.children[0].props.children).toBe("Value");

  });

});
