// MuiTextField.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MuiTextField from '../components/MuiTextField';

describe('MuiTextField', () => {
  const label = 'Test Label';
  const onChangeMock = jest.fn();

  it('renders the label', () => {
    render(
      <MuiTextField
        label={label}
        value=""
        onChange={onChangeMock}
        helperText="Please enter text"
      />
    );
    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });

  it('displays helper text', () => {
    render(
      <MuiTextField
        label={label}
        value=""
        onChange={onChangeMock}
        helperText="Please enter text"
      />
    );
    expect(screen.getByText('Please enter text')).toBeInTheDocument();
  });

  it('calls onChange when the input changes', () => {
    render(
      <MuiTextField
        label={label}
        value=""
        onChange={onChangeMock}
        helperText="Please enter text"
      />
    );
    const input = screen.getByLabelText(label);
    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it('displays an error state when error prop is true', () => {
    render(
      <MuiTextField
        label={label}
        value=""
        onChange={onChangeMock}
        error={true}
        helperText="Error message"
      />
    );
    expect(screen.getByText('Error message')).toBeInTheDocument();
    expect(screen.getByLabelText(label)).toHaveAttribute('aria-invalid', 'true');
  });
});