import './orderForm.css';
import { useForm } from "react-hook-form";
import { withRouter } from 'react-router-dom';
import { RouteComponentProps, useHistory } from 'react-router';
import { Order } from '../../interfaces/order';
import { Menu } from '../../interfaces/menu';
import React from 'react';

interface OrderProps {
  createNewOrder: (body: Order) => void,
  menus: Menu[],
  chosenMenu: string[], // chosenMenu is an array of dish Ids
  setChosenMenu: (body: string[]) => void,
}

const OrderForm: React.FC<OrderProps&RouteComponentProps> = ({ createNewOrder, menus, chosenMenu, setChosenMenu }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const history = useHistory();

  const onSubmit = (data: Order) => {
    const parsedData = {
      clientName: data.clientName,
      clientAddress: data.clientAddress,
      clientPhone: data.clientPhone,
      comments: data.comments,
      DishId: chosenMenu.map((id) => parseInt(id)),
    }
    createNewOrder(parsedData);
    setChosenMenu([]);
    reset();
    history.push('/bye');
  }


  const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (event.target.checked) {
      setChosenMenu([...chosenMenu, event.target.value])
    } else {
      setChosenMenu(chosenMenu.filter((dish) => dish !== event.target.value))
    }
  }

  return (
    <form
      className='order-form'
      data-testid='order-form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap');
      </style>
      <div className='container'>
        <h2 className='title-order'>
          Hi Friend! What would you like to eat today?
        </h2>
        {menus && menus.length > 0 && (
          <>
            <div className='elem-dish' data-testid='elem-dish'>
              {menus[0]?.Dishes.map((dish) => (
                <div key={dish.id} className='flexChild'>
                  <h3 className='title'>{dish.title}</h3>
                  <p className='description'>{dish.description}</p>
                  <p>€ {dish.price}</p>
                  <input
                    type='checkbox'
                    onChange={handleCheckBox}
                    value={dish.id}
                    name={dish.title}
                    ref={register}
                    className='checkbox'
                  />
                </div>
              ))}
            </div>
          </>
        )}
        <div className='input-field-container'>
          <h2 className='contact-details'> CONTACT INFORMATON</h2>
          <input
            className='clientName'
            aria-label='client-name-input'
            type='text'
            placeholder='Name'
            name='clientName'
            ref={register({ required: 'Name required' })}
          />
          <label></label>
          <input
            className='clientAddress'
            aria-label='client-address-input'
            type='text'
            placeholder='Address'
            name='clientAddress'
            ref={register({ required: 'Address required' })}
          />
          <label></label>
          <input
            className='clientPhone'
            aria-label='client-phone-input'
            type='number'
            placeholder='Phone'
            name='clientPhone'
            ref={register()}
          />
          <label></label>
          <input
            className='comments'
            type='text'
            aria-label='comments-input'
            placeholder='Comments'
            name='comments'
            ref={register()}
          />
          <label></label>
          <input className='send-button' type='submit' />
          {errors.title && <p>{errors.title.message}</p>}
          {errors.description && <p>{errors.description.message}</p>}
          {errors.price && <p>{errors.price.message}</p>}
        </div>
      </div>
    </form>
  );

}

export default withRouter(OrderForm);