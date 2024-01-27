import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginForm from ".";

describe("LoginForm", () => {
  const mockSubmit = jest.fn();

  test('Form render correctly', () => {
    render(<LoginForm onSubmit={mockSubmit}/>)
    const title = screen.getByText('Login to continue');
    expect(title).toBeDefined();

    const emailInput = screen.getByPlaceholderText('email');
    expect(emailInput).toBeDefined();

    const passwordInput = screen.getByPlaceholderText('password');
    expect(passwordInput).toBeDefined();
  })

  test('Submit with data from input value', async () => {
    render(<LoginForm onSubmit={mockSubmit} />)
    const emailInput = screen.getByPlaceholderText('email');
    const passwordInput = screen.getByPlaceholderText('password');
    const buttonSubmit = screen.getByText('Submit');

    fireEvent.change(emailInput, { target: { value: 'email@email.com'}});
    fireEvent.change(passwordInput, { target: { value: '123456789'}});
    fireEvent.click(buttonSubmit);

    await waitFor(() => expect(mockSubmit).toHaveBeenCalled());

    expect(mockSubmit).toHaveBeenCalledWith({
        email: 'email@email.com',
        password: '123456789'
    })
  })
  
});