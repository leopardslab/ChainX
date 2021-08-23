import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { shallow, mount, render, configure, wrapper } from "enzyme";
import BarCodeScannerView from "./index";

import * as redux from 'react-redux'
import { BarCodeScanner } from "expo-barcode-scanner";

const spy = jest.spyOn(redux, 'useDispatch')
spy.mockReturnValue(jest.fn());
const spySelector = jest.spyOn(redux, 'useSelector')
spySelector.mockReturnValue(jest.fn());


import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("<BarCodeScannerView />", () => {
    it("rendered as expected", () => {
        const barCodeScannerView = shallow(
          <BarCodeScannerView
          />
        ).dive().dive();
    
        expect(barCodeScannerView.type().displayName).toBe("ViewManagerAdapter_ExpoBarCodeScannerView");
      });
});