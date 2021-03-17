import DishSaved from './DishSaved';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

it('should render the "dish saved" message', () => {
  render(
    <DishSaved/>
  );
  expect(screen.getByText('Dish has been saved')).toBeInTheDocument();
  expect(screen.getByText('succesfully!')).toBeInTheDocument();
})