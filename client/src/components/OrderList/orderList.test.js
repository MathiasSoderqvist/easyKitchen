import { render, screen } from '@testing-library/react';
// eslint-disable-next-line jest/no-mocks-import
import { _mockOrders, _mockOrder2 } from '__mocks__/order/orders';
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import OrderList from './orderList';

const { id, clientName, clientAddress, clientPhone, comments, Dishes } = _mockOrder2
const Dish = Dishes[0];


describe('should correctly render the orders', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <OrderList order={_mockOrders} />
      </MemoryRouter>
    );
  });

  it('should render the correct number of orders', () => {
    const tableBody = screen.getByTestId("table-body")
    expect(tableBody.children.length).toEqual(2);
  });
});

describe('should correctly render the order details', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <OrderList order={_mockOrders} />
      </MemoryRouter>
    );
  });

  it('should display the order ID', () => {
    expect(screen.getByText(`${id}`)).toBeInTheDocument();
  })
  it('should display the client name', () => {
    expect(screen.getByText(`${clientName}`)).toBeInTheDocument();
  })
  it('should display the correct order details', () => {
    expect(screen.getByText(`${clientAddress}`)).toBeInTheDocument();
  })
  it('should display the client phone number', () => {
    expect(screen.getByText(`${clientPhone}`)).toBeInTheDocument();
  })
  it('should display the comments', () => {
    expect(screen.getByText(`${comments}`)).toBeInTheDocument();
  })
  it('should display the dishes', () => {
    expect(screen.getByText(`| ${Dish.title} |`)).toBeInTheDocument();
  })
})