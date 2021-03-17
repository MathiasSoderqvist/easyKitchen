import './menuItemList.css';
import * as React from 'react';
import { Menu } from 'interfaces/menu';

interface Props{
  menu: Menu
}

const MenuItemList: React.FC<Props> = ({ menu }) => {
  return (
    <div className='menuItemList' role='listitem' data-testid='menu-item'>
      <h3>{menu.title}</h3>
      {menu.Dishes && menu.Dishes.map(dish => <p key={dish.id}>{dish.title}</p>)}
    </div>
  )
}

export default MenuItemList;

