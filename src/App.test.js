import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"
import App from "./App";
import userEvent from '@testing-library/user-event';

it('should render post api data', async() => {
  render(<App />);
  expect(screen.getByText(/Search the post by ID/i)).toBeInTheDocument();
  const input = screen.getByRole('textbox');
  userEvent.type(input,'1');
  const search = screen.getByRole('button', {name:/search/i})
  userEvent.click(search);  
});