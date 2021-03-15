import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from "react-router-dom";
import PageNotFound from './pageNotFound';

it('should render without any errors', () => {
  render(
      <PageNotFound/>
  );
  expect(screen.getByRole('main')).toBeInTheDocument();
})

it('should render the error message', () => {
  render(
    <MemoryRouter>
      <PageNotFound/>
    </MemoryRouter>
  );
  expect(screen.getByText('This Page Melted in the Sun')).toBeInTheDocument();
})


describe('renders image', () => {
  it('displays the ice-cream image', () => {
    const {getByAltText} = render(<PageNotFound />)
    getByAltText("ice-cream"); // throws an expception if the element cannot be found
  })
});