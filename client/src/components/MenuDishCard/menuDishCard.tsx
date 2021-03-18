import * as React from 'react';
import { useState } from 'react';
import './menuDishCard.css';
import { Dish } from 'interfaces/dish';

export interface Props {
  dish: Dish,
  handleCheckBox: (event: React.ChangeEvent<HTMLInputElement>) => void,
  register: () => void;
}

const MenuDishCard: React.FC<Props> = ({ dish, handleCheckBox, register }) => {
  let [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <div className="dish" key={dish.id}>
      {isEditing ?
        <>
          <h3>{dish.title}</h3>
          <p>{dish.description}</p>
          <p>€ {dish.price}</p>
          <button className="edit-dish" onClick={() => setIsEditing(false)}>done</button>
        </>
        :
        <>
          <h3>{dish.title}</h3>
          <p>{dish.description}</p>
          <p>€ {dish.price}</p>
          <button className="edit-dish" onClick={() => setIsEditing(true)}>edit</button>
        </>
      }
    <input type="checkbox"
      aria-label="menu-item-checkbox"
      onChange={handleCheckBox}
      value={dish.id}
      name={dish.title}
      ref={register}
      className="checkbox"
    />
  </div>
  );
}

export default MenuDishCard;