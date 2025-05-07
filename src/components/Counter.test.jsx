import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './CounterComponent';


test('increments counter on button click', () => {
  render(<Counter />);
  const button = screen.getByText('Increment');
  fireEvent.click(button);
  expect(screen.getByText(/Count is 1/i)).toBeInTheDocument();
});
