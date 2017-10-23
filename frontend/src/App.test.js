import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
});

test('defaults to no user-defined area', () => {
  const app = shallow(<App />);
  expect(app.state()).toEqual({
    areaName: '',
    areaNorth: '',
    areaSouth: '',
    areaEast: '',
    areaWest: ''
  });
});

describe('setCurrentArea', () => {
  test('allows user-defined area to be set', () => {
    const app = shallow(<App />);
    const testArea = {
      areaName: 'foo',
      areaNorth: 0,
      areaSouth: 0,
      areaEast: 0,
      areaWest: 0
    };
    app.setCurrentArea(testArea);
    expect(app.state()).toEqual(testArea);
  });
  test('only sets area-related state', () => {
    const app = shallow(<App />);
    app.setCurrentArea({ notRelated: 0 });
    expect(app.state()).not.toEqual(expect.objectContaining({
      notRelated: 0
    }));
  });
});
