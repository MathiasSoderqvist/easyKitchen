import DishForm from './dishForm';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe('should render dish form components', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <DishForm/>
      </MemoryRouter>
    );
  })
  it('should render the "Add a new dish" title', () => {
    expect(screen.getByText('Add a new dish')).toBeInTheDocument();
  })
  it('should render title input', () => {
    expect(screen.getByRole('textbox', {name: 'title-input'}));
  })
  it('should render description input', () => {
    expect(screen.getByRole('textbox', {name: 'description-input'}));
  })
  it('should render price input', () => {
    expect(screen.getByRole('spinbutton', {name: 'price-input'}));
  })
  it('should render submit button', () => {
    expect(screen.getByRole('button', {name: 'submit-button'}));
  })
})

describe('should accept inputs', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <DishForm/>
      </MemoryRouter>
    );
  })

  it('should accept input in "Title" field', () => {
    const titleField = screen.getByRole('textbox', {name: 'title-input'});
    fireEvent.change(titleField, {target: {value: 'test'}});
    expect(titleField.value).toBe('test');
  })
  it('should accept input in "Description" field', () => {
    const descriptionField = screen.getByRole('textbox', {name: 'description-input'});
    fireEvent.change(descriptionField, {target: {value: 'test'}});
    expect(descriptionField.value).toBe('test');
  })
  it('should only accept numerical input in "Price" field', () => {
    const priceField = screen.getByRole('spinbutton', {name: 'price-input'});
    fireEvent.change(priceField, {target: {value: 10}});
    expect(priceField.value).toBe('10');
    fireEvent.change(priceField, {target: {value: ''}});
    fireEvent.change(priceField, {target: {value: 'a'}});
    expect(priceField.value).toBe('');
  })
})

describe('should handle submit action', () => {
  it('should call AddDish function with given parameters on submit', async () => {

    let mockAdd = jest.fn();
    render(
      <MemoryRouter>
        <DishForm addNewDish={mockAdd}/>
      </MemoryRouter>
    );
    const titleField = screen.getByRole('textbox', {name: 'title-input'});
    const descriptionField = screen.getByRole('textbox', {name: 'description-input'});
    const priceField = screen.getByRole('spinbutton', {name: 'price-input'});
    const dishForm = screen.getByRole('form', {name: 'dish-form'});

    fireEvent.change(titleField, {target: {value: 'testTitle'}});
    fireEvent.change(descriptionField, {target: {value: 'testDescription'}});
    fireEvent.change(priceField, {target: {value: 10}});
    fireEvent.submit(dishForm);
    await waitFor(() => expect(mockAdd).toHaveBeenCalled());
  })
})

