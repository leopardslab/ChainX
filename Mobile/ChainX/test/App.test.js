import React from 'react';
import renderer from 'react-test-renderer';
import { en } from '../src/language/en'

import App from '../App';

describe('<App />', () => {
    
  it('has development text', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
    expect(tree.children[0].type).toBe('View');
    expect(tree.children[0].children[0].type).toBe('Image');
    expect(tree.children[0].children[1].type).toBe('ActivityIndicator');
    expect(tree.children[0].children[2].type).toBe('Text');
    expect(tree.children[0].children[2].children[0]).toBe(en["loadingPageMessage"]);
  });
});
