import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MenuList from './menuList';

const mockMenus = [
  {
    title: 'Philsalmon',
    id: 5
  },
  {
    title: 'Volcano Bowl',
    id: 2
  }
];


  it('should render a menu it', () => {
    render(
        <MenuList menus={mockMenus} />
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  it('should render a menu for each menu item', () => {
    const {getAllByTestId} = render(
        <MenuList menus={mockMenus} />
    );
    const menuItems = getAllByTestId('menu-item').map(x => x.textContent)
    const fakeMenus = mockMenus.map(el => el.title);
    expect(menuItems).toEqual(fakeMenus);
  });







