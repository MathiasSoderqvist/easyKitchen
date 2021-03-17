import { readFileSync} from 'fs';
import path from 'path';
import { act } from '@testing-library/react';

const mockMenus = JSON.parse(
  readFileSync(path.join(__dirname, 'res.json').toString())
)

export const _mockMenus = mockMenus

export const _chosenMenus = ['1', '2'];

export const _mockAdd = jest.fn();

const mock = {
  menus: jest.fn(() => {
    return {
      then: callback => act(() => callback(mockMenus))
    }
  })
}

export default mock;