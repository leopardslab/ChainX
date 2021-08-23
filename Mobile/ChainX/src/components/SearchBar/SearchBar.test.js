import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import { SearchBar } from "./index";
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
} from "native-base";
import { shallow, mount, render, configure } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("<SearchBar />", () => {
  it("has required style components", () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <SearchBar
        searchVal={10}
        onBarcodeIconClicked={undefined}
        onSearchTextChnage={undefined}
      />
    );
    const result = renderer.getRenderOutput();

    const searchComponent = result.props.children.props;
    expect(searchComponent.placeholder).toBe("Search Product / Barcode");
    expect(result.props.children.props.value).toBe(10);
    expect(searchComponent.bg).toBe("gray.200");
    expect(searchComponent.InputLeftElement.props.as.type.name).toBe("Icon");
    expect(searchComponent.InputLeftElement.props.as.props.name).toBe(
      "ios-search"
    );
    expect(searchComponent.InputLeftElement.props.as.props.size).toBe(12);
    expect(searchComponent.InputRightElement.props.as.props.name).toBe(
      "barcode-outline"
    );
    expect(searchComponent.InputRightElement.props.as.props.size).toBe(12);
  });

  it("has working callBacks", () => {

    const mockOnSearchTextChnage = jest.fn();
    const mockOnBarcodeIconClicked = jest.fn();

    const wrapper = shallow(
      <NativeBaseProvider>
        <SearchBar
          searchVal={10}
          onBarcodeIconClicked={mockOnBarcodeIconClicked} 
          onSearchTextChnage={mockOnSearchTextChnage}
        />
      </NativeBaseProvider>
    ).dive().find(SearchBar).first().dive();
    
    const input = wrapper.find(Input).first().dive();
    input.props().onChangeText();
    expect(mockOnSearchTextChnage).toHaveBeenCalledTimes(1);

    input.props().InputRightElement.props.as.props.onPress()
    expect(mockOnBarcodeIconClicked).toHaveBeenCalledTimes(1);
  });
});
