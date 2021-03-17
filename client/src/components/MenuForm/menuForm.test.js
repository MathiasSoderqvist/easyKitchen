import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from "react-router-dom";
import MenuForm from './menuForm';

describe('should render menu form component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <MenuForm />
      </MemoryRouter>
    );
  })
  it('should render without any errors', () => {
    expect(screen.getByTestId('menu-form')).toBeInTheDocument()
  });
  it('should render the menu title input field', () => {
    expect(screen.getByRole('textbox', { name: "menu-title-input" })).toBeInTheDocument();
  })
  it('should render the dish submit input field', () => {
    expect(screen.getByRole('button', { name: "dish-submit-input" })).toBeInTheDocument();
  })
})

describe('should accept tittle input', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <MenuForm />
      </MemoryRouter>
    );
  })
  it('should accept input in "Title" field', () => {
    const titleField = screen.getByRole('textbox', {name: 'menu-title-input'});
    fireEvent.change(titleField, {target: {value: 'test'}});
    expect(titleField.value).toBe('test');
  })
});

const Dishes = [
  {
  title: 'Hawaiian',
  id: 3
  }
];

describe('should handle submit action', () => {
  it('should call createNewMenu function on submit', async () => {
    let mockAdd = jest.fn();
    let mockDish = jest.fn();
    render(
      <MemoryRouter>
        <MenuForm 
        createNewMenu={mockAdd} 
        dishes={Dishes} 
        selectedDishes={Dishes} 
        setSelectedDishes={mockDish}/>
      </MemoryRouter>
    );
    //check dish box and submits
    const checkbox = screen.getByRole('checkbox', {name: 'menu-item-checkbox'});
    const menuForm = screen.getByRole('form', {name: 'menu-form'});
    fireEvent.click(checkbox);
    fireEvent.submit(menuForm);
    await waitFor(() => expect(mockDish).toHaveBeenCalled());
    })
  })