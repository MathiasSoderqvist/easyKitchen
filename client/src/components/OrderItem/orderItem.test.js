import { render, screen } from '@testing-library/react';
// eslint-disable-next-line jest/no-mocks-import
import { _mockOrder1 } from '__mocks__/order/orders';
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import OrderItem from './orderItem';

const { id, clientName, clientAddress, clientPhone, comments } = _mockOrder1

describe('should render order single passed down order details', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <OrderItem order={_mockOrder1} />
      </MemoryRouter>
    );
  });

  it('should render the order ID without any errors', () => {
    expect(screen.getByText(`Order ID: ${id}`)).toBeInTheDocument();
  });

  it('should render the client name without any errors', () => {
    expect(screen.getByText(`Name: ${clientName}`)).toBeInTheDocument();
  });

  it('should render the client address without any errors', () => {
    expect(screen.getByText(`Address: ${clientAddress}`)).toBeInTheDocument();
  });

  it('should render the client phone without any errors', () => {
    expect(screen.getByText(`Phone: ${clientPhone}`)).toBeInTheDocument();
  });

  it('should render the client comments without any errors', () => {
    expect(screen.getByText(`Comments: ${comments}`)).toBeInTheDocument();
  });
});