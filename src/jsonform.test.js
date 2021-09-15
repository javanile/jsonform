import { render, screen } from '@testing-library/react';
import Jsonform from './App';

test('renders learn react link', () => {
  render(<JsonForm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
