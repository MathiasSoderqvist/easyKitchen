import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MenuItemList from './menuItemList';

const mockMenu = 
  {
    title: "pizza",
    Dishes: [
      {
      title: 'Hawaiian',
      id: 3
      },
      {
        title: 'Pepperoni',
        id: 1
      }
    ],
    id: 6,
  };

it('should render details of the chosen menu', () => {
  render(
    <MenuItemList menu={mockMenu} />
  );
  expect(screen.getByText('Hawaiian')).toBeInTheDocument();
  expect(screen.getByText('Pepperoni')).toBeInTheDocument();
})
