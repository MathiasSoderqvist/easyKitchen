import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Router, MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from 'history';
import pageNotFound from './pageNotFound';

it('should render without any errors', () => {
  render(
    <MemoryRouter>
      <pageNotFound/>
    </MemoryRouter>
  );
  expect(screen.getByRole('404-page')).toBeInTheDocument();
})