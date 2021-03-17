import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// eslint-disable-next-line jest/no-mocks-import
import { _mockMenus, _chosenMenus, _mockAdd } from '__mocks__/menu/menus';
import { MemoryRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import OrderForm from './orderForm';


// Here we test if the component is rendering the correct element 
describe('should render order form & order form components', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <OrderForm />
      </MemoryRouter>
    );
  });

  it('should render without any errors', () => {
    expect(screen.getByTestId("order-form")).toBeInTheDocument()
  });

  it('should render the clientName input field', () => {
    expect(screen.getByRole('textbox', { name: "client-name-input" })).toBeInTheDocument();
  })
  it('should render the clientAddress input field', () => {
    expect(screen.getByRole('textbox', { name: "client-address-input" })).toBeInTheDocument();
  })
  it('should render the clientPhone input field', () => {
    expect(screen.getByRole('spinbutton', { name: "client-phone-input" })).toBeInTheDocument();
  })
  it('should render the comments input field', () => {
    expect(screen.getByRole('textbox', { name: "comments-input" })).toBeInTheDocument();
  })

});

// Testing if the component is getting and displaying the menus correctly
describe('should display the correct number of menus', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <OrderForm
          menus={_mockMenus} />
      </MemoryRouter>
    );
  });

  it('should have the correct number of menus displayed', () => {
    const elemDish = screen.getByTestId("elem-dish")
    expect(elemDish.children.length).toEqual(2);
  });
});


// Testing if the correct functions get executed and if the component links to the correct
// url after submit.
describe('Should execute the correct functions after submit', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <OrderForm
          menus={_mockMenus}
          createNewOrder={_mockAdd}
          chosenMenu={_chosenMenus}
          setChosenMenu={_mockAdd} />
      </MemoryRouter>
    );
  });

  it('should execute the createNewMenu function after submit', async () => {

    // Input consts
    const nameInput = screen.getByRole('textbox', { name: "client-name-input" });
    const addressInput = screen.getByRole('textbox', { name: "client-address-input" });
    const phoneInput = screen.getByRole('spinbutton', { name: "client-phone-input" });
    const commentsInput = screen.getByRole('textbox', { name: "comments-input" });
    const orderForm = screen.getByTestId('order-form');

    // Events
    userEvent.type(nameInput, 'Testy Testingsons');
    userEvent.type(addressInput, 'Testlane 67');
    userEvent.type(phoneInput, '666345123');
    userEvent.type(commentsInput, 'Salsa muy picante');
    fireEvent.submit(orderForm);
    await waitFor(() => expect(_mockAdd).toHaveBeenCalledTimes(2));
  })
});
