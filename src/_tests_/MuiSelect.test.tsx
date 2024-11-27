import { render, screen } from '@testing-library/react';
import MuiTextField from '../components/MuiTextField';

test('renders MuiTextField component', () => {
  render(<MuiTextField label={''} value={''} onChange={function (event:

    React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    throw new Error('Function not implemented.');
  }} />);
  screen.debug(); // This will print the DOM
  const inputElement = screen.getByRole('textbox', { name: /your label/i });
  expect(inputElement).toBeInTheDocument();
});
