import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { shallow, mount, render, configure, wrapper } from "enzyme";
import { RatingModal } from "./index";
import { Box, FlatList, Text, Image, View } from "native-base";

import * as redux from 'react-redux'

const spy = jest.spyOn(redux, 'useDispatch')
spy.mockReturnValue(jest.fn());


import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("<RatingModal />", () => {
  it("rendered as expected", () => {
    const rating = shallow(
      <RatingModal
      showModal={true}
      />
    );

  
    expect(rating.props().isOpen).toBe(true);
    expect(rating.props().children.props.children[0].props.children).toBe("Customer feedback");

    expect(rating.props().children.props.children[1].props.children[0]).toBe("Provide rating value and comment");
    expect(rating.props().children.props.children[1].props.children[1].props.placeholder).toBe("Your comment goes here :)");
    expect(rating.props().children.props.children[1].props.children[1].props.mt).toBe(4);
    expect(rating.props().children.props.children[1].props.children[1].props.value).toBe("");
    
    expect(rating.props().children.props.children[1].props.children[2].props.startingValue).toBe(0);
    expect(rating.props().children.props.children[1].props.children[2].props.ratingCount).toBe(5);
    expect(rating.props().children.props.children[1].props.children[2].props.type).toBe("heart");
    expect(rating.props().children.props.children[1].props.children[2].props.ratingColor).toBe("#f1c40f");

    expect(rating.props().children.props.children[2].props.children.props.children[0].props.children).toBe("SAVE");
    expect(rating.props().children.props.children[2].props.children.props.children[1].props.children).toBe("CLOSE");
    expect(rating.props().children.props.children[2].props.children.props.variant).toBe("ghost");
    expect(rating.props().children.props.children[2].props.children.props.children[1].props.colorScheme).toBe("secondary");
    expect(rating.props().children.props.children[2].props.children.props.children[1].props.colorScheme).toBe("secondary");
    
  });

  it("check the comment section value", () => {
    const rating = shallow(
      <RatingModal
      showModal={true}
      />
    );

    expect(rating.props().children.props.children[1].props.children[1].props.value).toBe("");
    rating.props().children.props.children[1].props.children[1].props.onChange({target:{value:100}})
    expect(rating.props().children.props.children[1].props.children[1].props.value).toBe(100);
    
  });

});
