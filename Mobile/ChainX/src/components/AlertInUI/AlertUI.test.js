import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { shallow, mount, render, configure, wrapper } from "enzyme";
import { AlertMessages } from "./index";

import * as redux from 'react-redux'

const spy = jest.spyOn(redux, 'useDispatch')
spy.mockReturnValue(jest.fn());
const spySelector = jest.spyOn(redux, 'useSelector')
spySelector.mockReturnValue(jest.fn());


import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("<AlertMessages />", () => {
    it("rendered as expected", () => {
        const dropDownData = ["A","B"];
        const batchData = shallow(
          <AlertMessages
          alertMessageKey = {"SuppliersSelectBatch"}
          />
        );
    
        expect(batchData.props().children[1].props.children).toBe("Select Batch to view the supplier data.");
      });
});