import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import CityList from './Test';

function addCity(div, value) {
  const input = div.querySelector('input[name="city"]');
  TestUtils.Simulate.change(input, { target: { value } });
  TestUtils.Simulate.submit(div.querySelector('form'));
}

it('adds trimmed cities and ignores blank input', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CityList />, div);
  addCity(div, '  Boston ');
  addCity(div, '   ');
  addCity(div, 'Paris');
  const items = Array.from(div.querySelectorAll('li')).map(li => li.textContent);
  expect(items).toEqual(['Boston', 'Paris']);
  ReactDOM.unmountComponentAtNode(div);
});
