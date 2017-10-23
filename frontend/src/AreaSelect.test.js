import React from 'react';
import AreaSelect from './AreaSelect';
import { shallow } from 'enzyme';

const getMockAreas = jest.fn().mockReturnValue(Promise.resolve([
  {
    name: 'area1',
    north: 0,
    south: 0,
    east: 0,
    west: 0
  },
  {
    name: 'area2',
    north: 0,
    south: 0,
    east: 0,
    west: 0
  }
]));
const setCurrentArea = jest.fn();

let areaSelect = null;

beforeEach(() => {
  getMockAreas.mockReset();
  setCurrentArea.mockReset();
  areaSelect = shallow(<AreaSelect axios={{ get: getMockAreas }} />);
});

test('render', () => {
  shallow(<AreaSelect />);
});

test('loads user-defined areas on mount when none are provided', () => {
  expect(getMockAreas).toHaveBeenCalled();
  expect(getMockAreas.mock.calls[0][0]).toBe('server junk');
});

test('renders user defined areas as selectable boxes', () => {
  const selectableAreas = areaSelect.find('.user-area-select');
  expect(selectableAreas.length).toBe(2);
});

test('selects a user-defined area when one is clicked', () => {
  const selectableAreas = areaSelect.find('.user-area-select');
  selectableAreas[0].simulate('click');
  selectableAreas[1].simulate('click');
  expect(setCurrentArea.mock.calls.length).toBe(2);
});
