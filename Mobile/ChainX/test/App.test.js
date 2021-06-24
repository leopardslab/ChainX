import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
    
  it('has development text', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.props.style.length).toBe(2);
    expect(tree.props.style[0].flex).toBe(1);
  });
});
