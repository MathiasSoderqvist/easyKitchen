import DishItem from './dishItem';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockDish = {
  title: 'testburger',
  description: 'a burger with a flavor of test',
  price: '7'
}

it('should render the details of the given dish', () => {
  render(
    <DishItem dish={mockDish}/>
  );
  expect(screen.getByText('testburger')).toBeInTheDocument();
  expect(screen.getByText('a burger with a flavor of test')).toBeInTheDocument();
  expect(screen.getByText('7 €')).toBeInTheDocument();
})
