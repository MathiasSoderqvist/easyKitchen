import './dishItem.css'
import * as React from 'react';
import { Dish } from 'interfaces/dish';

interface Props{
  dish: Dish;
}

const DishItem: React.FC<Props> = ({ dish }) => {
  return (
    <div className='dishItem' role='listitem'>
      <h2>{dish.title}</h2>
      <p>{dish.description}</p>
      <p>{`${dish.price} €`}</p>
    </div>
  )
}

export default DishItem;