import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MenuSaved from './MenuSaved';

it('should render without any errors', () => {
  render(
      <MenuSaved />
  );
  expect(screen.getByRole('main')).toBeInTheDocument();
})

it('should render the error message', () => {
  render(
      <MenuSaved />
  );
  expect(screen.getByText('Menu has been saved')).toBeInTheDocument();
})