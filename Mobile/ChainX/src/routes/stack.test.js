import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { shallow, mount, render, configure, wrapper } from "enzyme";
import { Box, FlatList, Text, Image, View } from "native-base";

import * as redux from 'react-redux'
import Navigator from "./stack";


import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("<Navigator />", () => {

  it("rendered the correct navigation", () => {

    expect(Navigator.router.childRouters.LandingPage).toBe(null);
    expect(Navigator.router.childRouters.ItemDetail).toBe(null);
    expect(Navigator.router.childRouters.ProductSearch).toBe(null);
    expect(Navigator.router.childRouters.BarCodeScanner).toBe(null);

  });

});
