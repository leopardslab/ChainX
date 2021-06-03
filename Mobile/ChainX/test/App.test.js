import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
    
  it('has development text', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
    expect(tree.children[0].type).toBe('Text');
    expect(tree.children[0].children[0]).toBe('Initial status of Chaix Mobile app');
  });
});
