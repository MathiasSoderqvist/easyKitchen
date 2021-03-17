import { readFileSync } from 'fs';
import path from 'path';
import { act } from '@testing-library/react';

const mockOrders = JSON.parse(
  readFileSync(path.join(__dirname, 'res.json').toString())
)

const mock = {
  orders: jest.fn(() => {
    return {
      then: callback => act(() => callback(mockOrders))
    }
  })
}

export const _mockOrders = mockOrders
export const _mockOrder1 = mockOrders[0];
export const _mockOrder2 = mockOrders[1];
export const _mockAdd = jest.fn();

export default mock;