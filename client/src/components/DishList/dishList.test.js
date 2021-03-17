import DishList from './dishList';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockDishes = [
  {
    title: 'testburger',
    description: 'a burger with a flavor of test',
    price: '7',
    id: 1
  },
  {
    title: 'testkebab',
    description: 'test burger but cheaper',
    price: '5',
    id: 3
  }
];

it('should render a dish item object for each dish passed', () => {

  render(
    <DishList dishes={mockDishes}/>
  );

  expect(screen.getAllByRole('listitem')).toHaveLength(2);
  expect(screen.getByText('testburger')).toBeInTheDocument();
  expect(screen.getByText('a burger with a flavor of test')).toBeInTheDocument();
  expect(screen.getByText('testkebab')).toBeInTheDocument();
  expect(screen.getByText('test burger but cheaper')).toBeInTheDocument();
})


