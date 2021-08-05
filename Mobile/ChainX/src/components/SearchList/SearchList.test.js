import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { shallow, mount, render, configure, wrapper } from "enzyme";
import { DataList } from "./index";
import { Box, FlatList, Text, Image, View } from "native-base";

import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
describe("<DataList />", () => {
  it("rendered as expected", () => {
    const key = shallow(
      <DataList
        data={[
          {
            id: "1",
            productName: "Apple",
            company: "Apple Company A",
            brand: "AppleBrnd1",
            barcode: "12345678980",
            country: "SL",
            imageURL: "",
          },
        ]}
      />
    )
      .find(FlatList)
      .props();

    expect(key.keyExtractor({ id: "1" })).toBe("1");
    const out = key.renderItem({
      item: {
        id: "1",
        productName: "Apple",
        company: "Apple Company A",
        brand: "AppleBrnd1",
        barcode: "12345678980",
        country: "SL",
        imageURL: "Image path",
      },
    });
    expect(out.props.children[0].props.alt).toBe("Apple");
    expect(out.props.children[1].props.children[0].props.children[2]).toBe(
      "Apple"
    );
    expect(out.props.children[1].props.children[1].props.children[2]).toBe(
      "AppleBrnd1/Apple Company A"
    );
    expect(out.props.children[1].props.children[2].props.children[2]).toBe(
      "12345678980"
    );
    expect(out.props.children[1].props.children[3].props.children[2]).toBe(
      "SL"
    );
    expect(out.props.children[0].props.source).toBe("Image path");
  });

});
