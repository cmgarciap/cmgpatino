import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const paragraph = screen.getByText(/Hello CMGP/i);
  expect(paragraph).toBeInTheDocument();
});
