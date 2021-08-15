import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
jest.useFakeTimers()


describe('<App />', () => {
    
  it('has Main style components', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.props.style.flex).toBe(1);
  });
});
